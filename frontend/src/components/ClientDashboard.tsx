import React, { useState } from 'react';
import { FileSharing } from './FileSharing';

interface User {
  name: string;
  email: string;
  clientId: string;
  profilePicture?: string;
}

interface Case {
  id: string;
  title: string;
  status: 'Active' | 'Pending' | 'Completed' | 'On Hold';
  lastUpdate: string;
  description: string;
  assignedLawyer: string;
  priority: 'High' | 'Medium' | 'Low';
}

interface Payment {
  id: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  description: string;
  invoiceUrl?: string;
}

interface ClientDashboardProps {
  user: User;
  onLogout: () => void;
}

export function ClientDashboard({ user, onLogout }: ClientDashboardProps) {
  const [activeTab, setActiveTab] = useState<'cases' | 'payments' | 'documents' | 'filesharing' | 'profile'>('cases');

  // Mock data - in real app, this would come from API
  const cases: Case[] = [
    {
      id: 'C001',
      title: 'Property Dispute - Commercial Lease',
      status: 'Active',
      lastUpdate: '2025-10-28',
      description: 'Dispute regarding commercial lease terms and rent escalation clauses.',
      assignedLawyer: 'Khagesh B. Jha',
      priority: 'High'
    },
    {
      id: 'C002',
      title: 'Employment Contract Review',
      status: 'Completed',
      lastUpdate: '2025-10-15',
      description: 'Review and negotiation of employment contract terms.',
      assignedLawyer: 'Shikha Sharma',
      priority: 'Medium'
    }
  ];

  const payments: Payment[] = [
    {
      id: 'P001',
      amount: 50000,
      date: '2025-10-25',
      status: 'Paid',
      description: 'Legal consultation and case preparation fees',
      invoiceUrl: '#'
    },
    {
      id: 'P002',
      amount: 25000,
      date: '2025-11-01',
      status: 'Pending',
      description: 'Court filing and documentation fees'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': case 'Paid': return '#28a745';
      case 'Pending': return '#ffc107';
      case 'Completed': return '#007bff';
      case 'On Hold': case 'Overdue': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <div className="client-dashboard">
      <div className="dashboard-header">
        <div className="user-info">
          <div className="user-avatar">
            {user.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">{user.name.charAt(0)}</div>
            )}
          </div>
          <div className="user-details">
            <h2>Welcome, {user.name}</h2>
            <p>Client ID: {user.clientId}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="dashboard-actions">
          <button className="btn-primary">Schedule Consultation</button>
          <button className="btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'cases' ? 'active' : ''}`}
          onClick={() => setActiveTab('cases')}
        >
          My Cases ({cases.length})
        </button>
        <button 
          className={`nav-btn ${activeTab === 'payments' ? 'active' : ''}`}
          onClick={() => setActiveTab('payments')}
        >
          Payments & Billing
        </button>
        <button 
          className={`nav-btn ${activeTab === 'documents' ? 'active' : ''}`}
          onClick={() => setActiveTab('documents')}
        >
          Documents
        </button>
        <button 
          className={`nav-btn ${activeTab === 'filesharing' ? 'active' : ''}`}
          onClick={() => setActiveTab('filesharing')}
        >
          File Sharing
        </button>
        <button 
          className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile Settings
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'cases' && (
          <div className="cases-section">
            <div className="section-header">
              <h3>My Legal Cases</h3>
              <button className="btn-outline">Request New Case</button>
            </div>
            
            <div className="cases-grid">
              {cases.map((case_) => (
                <div key={case_.id} className="case-card">
                  <div className="case-header">
                    <div className="case-id">#{case_.id}</div>
                    <div 
                      className="case-status"
                      style={{ backgroundColor: getStatusColor(case_.status) }}
                    >
                      {case_.status}
                    </div>
                  </div>
                  <h4>{case_.title}</h4>
                  <p className="case-description">{case_.description}</p>
                  <div className="case-details">
                    <div className="case-lawyer">
                      <strong>Assigned Lawyer:</strong> {case_.assignedLawyer}
                    </div>
                    <div className="case-update">
                      <strong>Last Update:</strong> {case_.lastUpdate}
                    </div>
                    <div className="case-priority">
                      <strong>Priority:</strong> 
                      <span className={`priority priority-${case_.priority.toLowerCase()}`}>
                        {case_.priority}
                      </span>
                    </div>
                  </div>
                  <div className="case-actions">
                    <button className="btn-sm">View Details</button>
                    <button className="btn-sm">Messages</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="payments-section">
            <div className="section-header">
              <h3>Payments & Billing</h3>
              <div className="payment-summary">
                <div className="summary-card">
                  <h4>Total Outstanding</h4>
                  <div className="amount">₹25,000</div>
                </div>
                <div className="summary-card">
                  <h4>Paid This Year</h4>
                  <div className="amount">₹50,000</div>
                </div>
              </div>
            </div>

            <div className="payments-table">
              <table>
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td>#{payment.id}</td>
                      <td>{payment.description}</td>
                      <td>₹{payment.amount.toLocaleString()}</td>
                      <td>{payment.date}</td>
                      <td>
                        <span 
                          className="payment-status"
                          style={{ backgroundColor: getStatusColor(payment.status) }}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td>
                        {payment.status === 'Pending' ? (
                          <button className="btn-pay">Pay Now</button>
                        ) : (
                          <button className="btn-sm">Download Invoice</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="documents-section">
            <div className="section-header">
              <h3>Legal Documents</h3>
              <button className="btn-outline">Upload Document</button>
            </div>
            <div className="documents-grid">
              <div className="document-card">
                <div className="document-icon">📄</div>
                <h4>Property Lease Agreement</h4>
                <p>Uploaded: 2025-10-20</p>
                <button className="btn-sm">Download</button>
              </div>
              <div className="document-card">
                <div className="document-icon">📋</div>
                <h4>Court Filing Documents</h4>
                <p>Uploaded: 2025-10-15</p>
                <button className="btn-sm">Download</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'filesharing' && (
          <FileSharing 
            userRole="client"
            userId={user.email}
            userName={user.name}
          />
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Profile Settings</h3>
            </div>
            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user.name} readOnly />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={user.email} readOnly />
              </div>
              <div className="form-group">
                <label>Client ID</label>
                <input type="text" value={user.clientId} readOnly />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Add phone number" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea placeholder="Add your address"></textarea>
              </div>
              <button className="btn-primary">Update Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}