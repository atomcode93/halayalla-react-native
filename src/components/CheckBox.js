/* CREDIT https://github.com/tiaanduplessis/react-native-modest-checkbox */
'use strict'
import React, {Component, PropTypes} from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'

class CheckBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: false
    }

    this._toggleChecked = this._toggleChecked.bind(this)
  }

  componentDidMount () {
    this.setState({ checked: this.props.checked })
  }

  render () {
    return (
      <TouchableOpacity onPress={this._toggleChecked} underlayColor={this.props.underlayColor} style={styles.flexContainer}>
        <View style={this.props.containerStyle || styles.container}>
          {
            this.state.checked
              ? this.props.checkedComponent : this.props.uncheckedComponent
          }
        </View>
      </TouchableOpacity>
    )
  }

  _toggleChecked () {
    const checked = !this.state.checked
    const name = this.props.label

    this.setState({checked})
    this.props.onChange && this.props.onChange({name, checked})
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

CheckBox.defaultProps = {
  checked: false,
  checkedComponent: (<Text>Checked</Text>),
  uncheckedComponent: (<Text>Unchecked</Text>)
}

// CheckBox.propTypes = {
//   checkedComponent: PropTypes.element,
//   uncheckedComponent: PropTypes.element,
//   checked: PropTypes.bool,
//   checkBoxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   onChange: PropTypes.func
// }

export default CheckBox
