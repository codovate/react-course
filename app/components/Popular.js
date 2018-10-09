var React = require("react");

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return { selectedLanguage: lang };
    });
  }

  render() {
    var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

    return (
        <p> Selected Language: { this.state.selectedLanguage }</p>
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            <li key={lang} onClick={this.updateLanguage.bind(null, lang)}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;