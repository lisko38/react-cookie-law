import React from 'react';
import bannerStyle from './bannerStyle';
import CookieBannerPreferences from './CookieBannerPreferences';

class CookieBannerContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showPreferences: false };
  }

  render() {
    const {
      styles = {},
      className = '',
      message = 'No text',
      policyLink = '/#',
      privacyPolicyLinkText = 'Privacy Policy',
      acceptButtonText = 'Accept all',
      managePreferencesButtonText = 'Mange my cookies',
      savePreferencesButtonText = 'Save and close',
      onConfirm = () => {},
      onAcceptAll = () => {},
      showDeclineButton = false,
      declineButtonText = 'Decline all',
      onDecline = () => {},
    } = this.props;

    const { showPreferences } = this.state;

    const {
      dialog: dialogStyle,
      container: containerStyle,
      message: messageStyle,
      policy: policyStyle,
      buttonWrapper: buttonWrapperStyle,
      button: buttonStyle,
      acceptButton: acceptButtonStyle,
    } = { ...bannerStyle, ...styles };

    return (
      <div className={`react-cookie-law-dialog ${className}`} style={dialogStyle}>
        <div className="react-cookie-law-container" style={containerStyle}>
          <div className="react-cookie-law-msg" style={messageStyle}>{message}</div>

          {
            showPreferences && (<CookieBannerPreferences {...this.props} />)
          }

          <a href={policyLink} className="react-cookie-law-policy" style={policyStyle} target="_blank" rel="noreferrer">{privacyPolicyLinkText}</a>

          <div className="react-cookie-law-button-wrapper" style={buttonWrapperStyle}>
            <button type="button" className="react-cookie-law-accept-btn" style={acceptButtonStyle || buttonStyle} onClick={() => onAcceptAll()}>
              <span>{acceptButtonText}</span>
            </button>
            {
              showPreferences
                ? (
                  <button type="button" className="react-cookie-law-save-btn" style={buttonStyle} onClick={() => onConfirm()}>
                    <span>{savePreferencesButtonText}</span>
                  </button>
                )
                : (
                  <button type="button" className="react-cookie-law-manage-btn" style={buttonStyle} onClick={() => this.setState({ showPreferences: true })}>
                    <span>{managePreferencesButtonText}</span>
                  </button>
                )
            }
            { 
              showDeclineButton && (
              <button type="button" className="react-cookie-law-accept-btn" style={buttonStyle} onClick={() => onDecline()}>
                <span>{declineButtonText}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CookieBannerContent;
