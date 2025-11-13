import React, { useState } from 'react';
import { FileSharing } from './FileSharing';

interface LawyerUser {
  name: string;
  email: string;
  lawyerId: string;
  specialization: string;
  profilePicture?: string;
}

interface LawyerDashboardProps {
  user: LawyerUser;
  onLogout: () => void;
}

export function LawyerDashboard({ user, onLogout }: LawyerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'cases' | 'clients' | 'calendar' | 'filesharing' | 'profile'>('cases');

  // Mock data for lawyer dashboard
  const activeCases = [
    {
      id: 'C001',
      title: 'Property Dispute - Commercial Lease',
      client: 'Rajesh Kumar',
      status: 'Active',
      nextHearing: '2025-11-15',
      priority: 'High',
      lastUpdate: '2025-10-28'
    },
    {
      id: 'C002',
      title: 'Employment Contract Review',
      client: 'Priya Sharma',
      status: 'Review',
      nextHearing: '2025-11-08',
      priority: 'Medium',
      lastUpdate: '2025-10-26'
    },
    {
      id: 'C003',
      title: 'Corporate Merger Advisory',
      client: 'TechCorp Industries',
      status: 'Active',
      nextHearing: '2025-11-20',
      priority: 'High',
      lastUpdate: '2025-10-29'
    }
  ];

  const clients = [
    {
      id: 'CL001',
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      activeCases: 2,
      lastContact: '2025-10-28'
    },
    {
      id: 'CL002',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43211',
      activeCases: 1,
      lastContact: '2025-10-26'
    },
    {
      id: 'CL003',
      name: 'TechCorp Industries',
      email: 'legal@techcorp.com',
      phone: '+91 98765 43212',
      activeCases: 3,
      lastContact: '2025-10-29'
    }
  ];

  const upcomingSchedule = [
    {
      id: 'S001',
      title: 'Client Consultation - Rajesh Kumar',
      date: '2025-11-01',
      time: '10:00 AM',
      type: 'Meeting'
    },
    {
      id: 'S002',
      title: 'Court Hearing - Property Dispute',
      date: '2025-11-15',
      time: '2:00 PM',
      type: 'Court'
    },
    {
      id: 'S003',
      title: 'Document Review - TechCorp',
      date: '2025-11-03',
      time: '11:30 AM',
      type: 'Review'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#28a745';
      case 'Review': return '#ffc107';
      case 'Completed': return '#007bff';
      case 'On Hold': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return '#dc3545';
      case 'Medium': return '#ffc107';
      case 'Low': return '#28a745';
      default: return '#6c757d';
    }
  };

  return (
    <div className="lawyer-dashboard">
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
            <p>Lawyer ID: {user.lawyerId}</p>
            <p>Specialization: {user.specialization}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="dashboard-actions">
          <button className="btn-primary">New Case</button>
          <button className="btn-outline">Schedule Meeting</button>
          <button className="btn-secondary" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'cases' ? 'active' : ''}`}
          onClick={() => setActiveTab('cases')}
        >
          Active Cases ({activeCases.length})
        </button>
        <button 
          className={`nav-btn ${activeTab === 'clients' ? 'active' : ''}`}
          onClick={() => setActiveTab('clients')}
        >
          Clients ({clients.length})
        </button>
        <button 
          className={`nav-btn ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar
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
          Profile
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'cases' && (
          <div className="cases-section">
            <div className="section-header">
              <h3>Active Cases</h3>
              <div className="case-stats">
                <div className="stat-card">
                  <h4>Total Active</h4>
                  <div className="stat-number">{activeCases.length}</div>
                </div>
                <div className="stat-card">
                  <h4>High Priority</h4>
                  <div className="stat-number">{activeCases.filter(c => c.priority === 'High').length}</div>
                </div>
                <div className="stat-card">
                  <h4>This Week</h4>
                  <div className="stat-number">2</div>
                </div>
              </div>
            </div>
            
            <div className="cases-grid">
              {activeCases.map((case_) => (
                <div key={case_.id} className="case-card">
                  <div className="case-header">
                    <div className="case-id">#{case_.id}</div>
                    <div className="case-badges">
                      <span 
                        className="case-status"
                        style={{ backgroundColor: getStatusColor(case_.status) }}
                      >
                        {case_.status}
                      </span>
                      <span 
                        className="case-priority"
                        style={{ backgroundColor: getPriorityColor(case_.priority) }}
                      >
                        {case_.priority}
                      </span>
                    </div>
                  </div>
                  <h4>{case_.title}</h4>
                  <div className="case-details">
                    <div className="case-client">
                      <strong>Client:</strong> {case_.client}
                    </div>
                    <div className="case-hearing">
                      <strong>Next Hearing:</strong> {case_.nextHearing}
                    </div>
                    <div className="case-update">
                      <strong>Last Update:</strong> {case_.lastUpdate}
                    </div>
                  </div>
                  <div className="case-actions">
                    <button className="btn-sm">View Details</button>
                    <button className="btn-sm">Add Notes</button>
                    <button className="btn-sm">Contact Client</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="clients-section">
            <div className="section-header">
              <h3>Client Management</h3>
              <button className="btn-outline">Add New Client</button>
            </div>

            <div className="clients-table">
              <table>
                <thead>
                  <tr>
                    <th>Client ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Active Cases</th>
                    <th>Last Contact</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.id}>
                      <td>#{client.id}</td>
                      <td>{client.name}</td>
                      <td>
                        <div>{client.email}</div>
                        <div className="phone">{client.phone}</div>
                      </td>
                      <td>{client.activeCases}</td>
                      <td>{client.lastContact}</td>
                      <td>
                        <button className="btn-sm">View Profile</button>
                        <button className="btn-sm">Send Message</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="calendar-section">
            <div className="section-header">
              <h3>Upcoming Schedule</h3>
              <button className="btn-outline">Add Event</button>
            </div>

            <div className="schedule-grid">
              {upcomingSchedule.map((event) => (
                <div key={event.id} className="schedule-card">
                  <div className="schedule-date">
                    <div className="date">{event.date}</div>
                    <div className="time">{event.time}</div>
                  </div>
                  <div className="schedule-details">
                    <h4>{event.title}</h4>
                    <span className={`event-type type-${event.type.toLowerCase()}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="schedule-actions">
                    <button className="btn-sm">Edit</button>
                    <button className="btn-sm">Reschedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'filesharing' && (
          <FileSharing 
            userRole="lawyer"
            userId={user.email}
            userName={user.name}
          />
        )}

        {activeTab === 'profile' && (
          <div className="profile-section">
            <div className="section-header">
              <h3>Professional Profile</h3>
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
                <label>Lawyer ID</label>
                <input type="text" value={user.lawyerId} readOnly />
              </div>
              <div className="form-group">
                <label>Specialization</label>
                <input type="text" value={user.specialization} />
              </div>
              <div className="form-group">
                <label>Bar Council Registration</label>
                <input type="text" placeholder="Enter bar council number" />
              </div>
              <div className="form-group">
                <label>Years of Experience</label>
                <input type="number" placeholder="Years of practice" />
              </div>
              <div className="form-group">
                <label>Office Address</label>
                <textarea placeholder="Office address"></textarea>
              </div>
              <button className="btn-primary">Update Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}