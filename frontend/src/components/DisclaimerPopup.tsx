import React from 'react';

interface DisclaimerPopupProps {
  onAgree: () => void;
  onDisagree: () => void;
}

export const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAgree, onDisagree }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000,
      padding: '20px',
      overflow: 'auto'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <h2 style={{
          color: '#1c4e80',
          marginBottom: '20px',
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          borderBottom: '2px solid #1c4e80',
          paddingBottom: '15px'
        }}>
          DISCLAIMER
        </h2>
        
        <div style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '30px',
          textAlign: 'justify'
        }}>
          <p style={{ marginBottom: '15px' }}>
            As per the rules of the Bar Council of India, we are not permitted to solicit work or advertise. 
            By agreeing to access this website, the user acknowledges and confirms the following:
          </p>
          
          <p style={{ marginBottom: '15px' }}>
            There has been no advertisement, solicitation, personal communication, invitation or inducement 
            of any sort whatsoever from M Mulla Associates or any of its members to solicit any work through 
            this website. This website is meant only for providing information and does not purport to be 
            exhaustive and updated in relation to the information contained herein. No material/information 
            provided on this website should be construed as legal advice. The receipt or use of this website 
            would not create any lawyer-client relationship. The user wishes to seek information on his/her 
            own accord and volition for his/her own use. Users are advised to seek independent legal counsel 
            before proceeding to act on any information provided herein. M Mulla Associates will not be liable 
            for any consequence of any action taken by the user relying on material/information provided on 
            this website.
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={onDisagree}
            style={{
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#c82333';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#dc3545';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            DISAGREE
          </button>
          
          <button
            onClick={onAgree}
            style={{
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: '150px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#218838';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#28a745';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            AGREE
          </button>
        </div>
      </div>
    </div>
  );
};
