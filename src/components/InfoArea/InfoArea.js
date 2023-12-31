import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import styles from './styles/infoStyle'

const useStyles = makeStyles(styles)

const InfoArea = (props) => {
  const { title, description, iconColor } = props
  const classes = useStyles()

  return (
    <div className={classes.infoArea}>
      <div className={classes.iconWrapper + ' ' + classes[iconColor]}>
        <props.icon className={classes.icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  )
}

InfoArea.defaultProps = {
  iconColor: 'gray',
}

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(['primaryCG', 'primary', 'warning', 'danger', 'success', 'info', 'rose', 'gray']),
}

export default InfoArea
