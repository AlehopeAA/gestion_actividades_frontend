import { successColor, tooltip, cardTitle, grayColor } from 'assets/jss/material-ui-react'

import hoverCardStyle from 'assets/jss/material-ui-react/hoverCardStyle.js'

const dashboardStyle = {
  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: '0px',
    marginBottom: '3px',
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: '0px',
    marginBottom: '3px',
    textAlign: 'center',
  },
  cardCategory: {
    color: grayColor[0],
    fontSize: '14px',
    paddingTop: '10px',
    marginBottom: '0',
    marginTop: '0',
    margin: '0',
  },
  cardProductDesciprion: {
    textAlign: 'center',
    color: grayColor[0],
  },
  stats: {
    color: grayColor[0],
    fontSize: '12px',
    lineHeight: '22px',
    display: 'inline-flex',
    '& svg': {
      position: 'relative',
      top: '4px',
      width: '16px',
      height: '16px',
      marginRight: '3px',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      position: 'relative',
      top: '4px',
      fontSize: '16px',
      marginRight: '3px',
    },
  },
  icon: {
    color: '#333333',
    margin: '10px auto 0',
    width: '130px',
    height: '130px',
    border: '1px solid #E5E5E5',
    borderRadius: '50%',
    lineHeight: '174px',
    '& svg': {
      width: '55px',
      height: '55px',
    },
    '& .fab,& .fas,& .far,& .fal,& .material-icons': {
      width: '55px',
      fontSize: '55px',
    },
  },
  cardDescription: {
    padding: '10px',
  },
  productStats: {
    paddingTop: '7px',
    paddingBottom: '7px',
    margin: '0',
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
  underChartIcons: {
    width: '17px',
    height: '17px',
  },
  price: {
    color: 'inherit',
    '& h4': {
      marginBottom: '0px',
      marginTop: '0px',
    },
  },
}

export default dashboardStyle
