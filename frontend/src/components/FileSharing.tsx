import React, { useState, useRef } from 'react';

interface FileItem {
  id: string;
  name: string;
  size: number;
  uploadDate: string;
  uploadedBy: string;
  uploadedByRole: 'client' | 'lawyer';
  category: 'Case Documents' | 'Evidence' | 'Contracts' | 'Correspondence' | 'Other';
  status: 'Available' | 'Processing' | 'Requires Review';
  description?: string;
  downloadCount: number;
  isConfidential: boolean;
}

interface FileSharingProps {
  userRole: 'client' | 'lawyer';
  userId: string;
  userName: string;
}

export function FileSharing({ userRole, userId, userName }: FileSharingProps) {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: 'F001',
      name: 'Property_Lease_Agreement_Draft.pdf',
      size: 2.4 * 1024 * 1024, // 2.4 MB
      uploadDate: '2025-10-28',
      uploadedBy: 'Khagesh B. Jha',
      uploadedByRole: 'lawyer',
      category: 'Contracts',
      status: 'Requires Review',
      description: 'Draft lease agreement for review. Please provide feedback on clauses 5-8.',
      downloadCount: 3,
      isConfidential: true
    },
    {
      id: 'F002',
      name: 'Client_Documents_Package.zip',
      size: 15.8 * 1024 * 1024, // 15.8 MB
      uploadDate: '2025-10-25',
      uploadedBy: 'Rajesh Kumar',
      uploadedByRole: 'client',
      category: 'Case Documents',
      status: 'Available',
      description: 'Original property documents, ID proofs, and related certificates.',
      downloadCount: 1,
      isConfidential: true
    },
    {
      id: 'F003',
      name: 'Court_Filing_Receipt.pdf',
      size: 0.8 * 1024 * 1024, // 0.8 MB
      uploadDate: '2025-10-20',
      uploadedBy: 'Shikha Sharma',
      uploadedByRole: 'lawyer',
      category: 'Case Documents',
      status: 'Available',
      description: 'Official receipt for court filing fees and case registration.',
      downloadCount: 5,
      isConfidential: false
    }
  ]);

  const [activeTab, setActiveTab] = useState<'all' | 'uploaded' | 'received'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const categories = ['Case Documents', 'Evidence', 'Contracts', 'Correspondence', 'Other'];

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const getFileIcon = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf': return '📄';
      case 'doc': case 'docx': return '📝';
      case 'xls': case 'xlsx': return '📊';
      case 'zip': case 'rar': return '📦';
      case 'jpg': case 'jpeg': case 'png': return '🖼️';
      default: return '📁';
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Available': return '#28a745';
      case 'Processing': return '#ffc107';
      case 'Requires Review': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const filteredFiles = files.filter(file => {
    if (activeTab === 'uploaded' && file.uploadedByRole !== userRole) return false;
    if (activeTab === 'received' && file.uploadedByRole === userRole) return false;
    if (selectedCategory !== 'all' && file.category !== selectedCategory) return false;
    return true;
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate file upload process
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      
      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        setUploadProgress(progress);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Add file to the list
      const newFile: FileItem = {
        id: `F${String(files.length + i + 1).padStart(3, '0')}`,
        name: file.name,
        size: file.size,
        uploadDate: new Date().toISOString().split('T')[0],
        uploadedBy: userName,
        uploadedByRole: userRole,
        category: 'Other', // Default category, user can change later
        status: 'Processing',
        description: 'Recently uploaded file',
        downloadCount: 0,
        isConfidential: false
      };

      setFiles(prev => [...prev, newFile]);
    }

    setIsUploading(false);
    setUploadProgress(0);
    setShowUploadModal(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDownload = (file: FileItem) => {
    // Simulate file download
    setFiles(prev => prev.map(f => 
      f.id === file.id ? { ...f, downloadCount: f.downloadCount + 1 } : f
    ));
    
    // In real implementation, this would trigger actual file download
    console.log(`Downloading file: ${file.name}`);
    alert(`Downloaded: ${file.name}`);
  };

  const handleDeleteFile = (fileId: string) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setFiles(prev => prev.filter(f => f.id !== fileId));
    }
  };

  return (
    <div className="file-sharing-container">
      <div className="file-sharing-header">
        <div className="header-left">
          <h3>File Sharing Center</h3>
          <p>Secure document exchange between clients and legal team</p>
        </div>
        <div className="header-actions">
          <button 
            className="btn-upload"
            onClick={() => setShowUploadModal(true)}
          >
            📤 Upload Files
          </button>
        </div>
      </div>

      <div className="file-filters">
        <div className="tab-filters">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Files ({files.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'uploaded' ? 'active' : ''}`}
            onClick={() => setActiveTab('uploaded')}
          >
            My Uploads ({files.filter(f => f.uploadedByRole === userRole).length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'received' ? 'active' : ''}`}
            onClick={() => setActiveTab('received')}
          >
            Received ({files.filter(f => f.uploadedByRole !== userRole).length})
          </button>
        </div>

        <div className="category-filter">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="files-grid">
        {filteredFiles.map(file => (
          <div key={file.id} className="file-card">
            <div className="file-header">
              <div className="file-icon">{getFileIcon(file.name)}</div>
              <div className="file-meta">
                <h4 className="file-name">{file.name}</h4>
                <div className="file-details">
                  <span className="file-size">{formatFileSize(file.size)}</span>
                  <span className="file-date">{file.uploadDate}</span>
                  {file.isConfidential && <span className="confidential-badge">🔒 Confidential</span>}
                </div>
              </div>
              <div className="file-actions">
                <button 
                  className="action-btn download-btn"
                  onClick={() => handleDownload(file)}
                  title="Download file"
                >
                  ⬇️
                </button>
                {file.uploadedByRole === userRole && (
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => handleDeleteFile(file.id)}
                    title="Delete file"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </div>

            <div className="file-info">
              <div className="upload-info">
                <span className="uploader">
                  Uploaded by: <strong>{file.uploadedBy}</strong> 
                  <span className={`role-badge ${file.uploadedByRole}`}>
                    {file.uploadedByRole === 'lawyer' ? '⚖️ Lawyer' : '👤 Client'}
                  </span>
                </span>
              </div>
              
              <div className="file-category">
                Category: <span className="category-tag">{file.category}</span>
              </div>

              <div 
                className="file-status"
                style={{ color: getStatusColor(file.status) }}
              >
                Status: <strong>{file.status}</strong>
              </div>

              {file.description && (
                <div className="file-description">
                  <p>{file.description}</p>
                </div>
              )}

              <div className="file-stats">
                <span>Downloads: {file.downloadCount}</span>
              </div>
            </div>
          </div>
        ))}

        {filteredFiles.length === 0 && (
          <div className="no-files-message">
            <div className="no-files-icon">📂</div>
            <h4>No files found</h4>
            <p>Upload some files to get started with document sharing.</p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="upload-modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
            <div className="upload-modal-header">
              <h3>Upload Files</h3>
              <button 
                className="close-modal-btn"
                onClick={() => setShowUploadModal(false)}
              >
                ×
              </button>
            </div>

            <div className="upload-modal-content">
              <div className="upload-zone">
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="file-input"
                  disabled={isUploading}
                />
                
                {!isUploading ? (
                  <div className="upload-prompt">
                    <div className="upload-icon">📤</div>
                    <h4>Choose files to upload</h4>
                    <p>Select one or more files to share securely</p>
                    <button 
                      className="select-files-btn"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Select Files
                    </button>
                  </div>
                ) : (
                  <div className="upload-progress">
                    <div className="progress-icon">⏳</div>
                    <h4>Uploading...</h4>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p>{uploadProgress}% complete</p>
                  </div>
                )}
              </div>

              <div className="upload-guidelines">
                <h4>Upload Guidelines:</h4>
                <ul>
                  <li>Maximum file size: 50MB per file</li>
                  <li>Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG, ZIP</li>
                  <li>Files are encrypted and securely stored</li>
                  <li>All uploads are logged for security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}