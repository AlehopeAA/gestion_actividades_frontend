import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormControl, InputLabel, makeStyles, MenuItem, Select as Selectable } from '@material-ui/core'
import GridItem from 'components/Grid/GridItem'
import roles from 'config/roles/roles'
import { USER_LIST_BY_ROLE_NAME_RESET } from 'redux/constants/userConstants'
import { TEAM_WORKS_BY_RESPONSIBLE_RESET } from 'redux/constants/teamWorkConstants'
import { getUsersByRoleName } from 'redux/actions/userActions'
import styles from '../styles/asignResponsiblFilerStyles'

const useStyles = makeStyles(styles)

const AsignResponsibleFilter = ({ setCurrentJobPositionId, currentJobPositionId }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    successUserListByRoleName,
    loadingUserListByRoleName,
    userListByRoleNameData,
    errorUserListByRoleName,
  } = useSelector((state) => state.userListByRoleName)

  useEffect(() => {
    if (!successUserListByRoleName && !errorUserListByRoleName) {
      dispatch(getUsersByRoleName(roles.RESPONSABLE_ROLE))
    }
  }, [successUserListByRoleName, errorUserListByRoleName])

  useEffect(() => {
    return dispatch({ type: USER_LIST_BY_ROLE_NAME_RESET })
  }, [dispatch])

  const isEmpty = (arr) => arr.length <= 0

  return (
    <>
      {loadingUserListByRoleName ? (
        <>Cargando</>
      ) : (
        userListByRoleNameData && (
          <GridItem xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor='asign-responsible'>
                {isEmpty(userListByRoleNameData) ? 'No hay Responsables para seleccionar' : 'Responsables *'}
              </InputLabel>
              <Selectable
                MenuProps={{
                  className: classes.selectMenu,
                }}
                className={classes.select}
                value={currentJobPositionId}
                onChange={(e) => {
                  dispatch({ type: TEAM_WORKS_BY_RESPONSIBLE_RESET })
                  setCurrentJobPositionId(e.target.value)
                }}
                disabled={isEmpty(userListByRoleNameData)}
                inputProps={{
                  name: 'asign-responsible',
                  id: 'asign-responsible',
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                  }}
                  disabled
                >
                  Selecciona uno
                </MenuItem>
                {userListByRoleNameData.map((positionJob, index) => (
                  <MenuItem
                    value={positionJob.id_puesto}
                    key={index}
                    classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                  >
                    {`${positionJob.nombre} ${positionJob?.apellido1} ${positionJob?.apellido2}`}
                  </MenuItem>
                ))}
              </Selectable>
            </FormControl>
          </GridItem>
        )
      )}
    </>
  )
}

export default AsignResponsibleFilter
