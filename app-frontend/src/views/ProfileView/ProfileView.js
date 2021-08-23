import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Pencil, FilePerson, Check, X } from 'react-bootstrap-icons'
import { NotificationManager } from 'react-notifications'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import { updateProfileDataRequest } from '../../store/actions/actions'
import './ProfileView.scss'

const PencilButton = ({ onClick, disabled }) => (
  <button className="btn p-0 pb-2" onClick={onClick} disabled={disabled}>
    <Pencil />
  </button>
)

const SaveButton = ({ onClick }) => (
  <button className="btn p-0 pb-2" onClick={onClick} >
    <Check size="24px" />
  </button>
)

const CloseButton = ({ onClick }) => (
  <button className="btn p-0 pb-2" onClick={onClick} >
    <X size="24px" />
  </button>
)

const EditableField = ({ startEditing, isEditing, disabled, value, setValue, saveChanges, stopEditing }) => {
  return !isEditing ? (
    <>
      <p className="d-inline-block data-line">{value}</p>
      <PencilButton onClick={startEditing} disabled={disabled} />
    </>
  ) : (
    <>
      <input
        type="text"
        className="form-control data-line"
        value={value}
        onChange={setValue}
        placeholder="Name"
        autoFocus
      />
      <SaveButton onClick={saveChanges} />
      <CloseButton onClick={stopEditing} />
    </>
  )
}

const ProfileView = () => {
  const dispatch = useDispatch()
  const _user = useSelector(state => state.auth.user)
  const [user, setUser] = useState(_user)

  const setName = event => setUser({ ...user, name: event.target.value })
  const setEmail = event => setUser({ ...user, email: event.target.value })

  const [editName, setEditName] = useState(false)
  const [editEmail, setEditEmail] = useState(false)
  const [ifEditingInProgress, setEditingInProgress] = useState(false)

  const startEditName = () => {
    setEditName(true)
    setEditingInProgress(true)
  }
  const stopEditName = () => {
    setEditName(false)
    setEditingInProgress(false)
  }

  const startEditEmail = () => {
    setEditEmail(true)
    setEditingInProgress(true)
  }
  const stopEditEmail = () => {
    setEditEmail(false)
    setEditingInProgress(false)
  }

  const updateNameHandler = async () => {
    if (user.name === _user.name) {
      return stopEditName()
    }

    const res = await dispatch(updateProfileDataRequest(user))

    if (res.error) {
      NotificationManager.error(res.error.response.data.errors.name)
      setUser(_user)
    } else {
      stopEditName()
    }
  }
  const updateEmailHandler = async () => {
    if (user.email === _user.email) {
      return stopEditEmail()
    }

    const res = await dispatch(updateProfileDataRequest(user))

    if (res.error) {
      NotificationManager.error(res.error.response.data.errors.email)
      setUser(_user)
    } else {
      stopEditEmail()
    }
  }

  return (
    <DefaultLayout>
      <div id="profile-view">
        <div className="profile-bar d-flex justify-content-around">
          <div className="font-bold-size-lg">
            Account
          </div>

          <div>
            <Link to="/logout" className="btn text-uppercase font-bold-size-md">
              Log Out
            </Link>
          </div>
        </div>

        <div className="info d-flex justify-content-center">
          <form className="d-inline-block" onSubmit={e => e.preventDefault()}>
            <div className="form-group text-center avatar pb-3">
              <span>
                <FilePerson size="120px" />
              </span>
            </div>

            <div className="form-group mt-3 text-nowrap text-center">
              <EditableField startEditing={startEditName} isEditing={editName} disabled={ifEditingInProgress}
                value={user.name} setValue={setName} saveChanges={updateNameHandler} stopEditing={stopEditName} />
            </div>

            <div className="form-group mb-4 text-nowrap text-center">
              <EditableField startEditing={startEditEmail} isEditing={editEmail} disabled={ifEditingInProgress}
                value={user.email} setValue={setEmail} saveChanges={updateEmailHandler} stopEditing={stopEditEmail} />
            </div>

            <div className="form-group mb-2 text-nowrap text-center">
              <Link to="/change-password">
                Change password
              </Link>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default ProfileView
