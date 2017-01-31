const React = require('react')


class FillerText extends React.Component {
  render() {
    return(
        <p>I am a filler text. I can be used to fill your screen. Amazing!</p>
    )
  }
}

//Elements have to nested inside of a div if there are 2 or more Elements
//react renders 1 element. but this element can have children.


module.exports = FillerText
