import './index.css'

const ProfileCard = props => {
  const {profile} = props
  const {name, email, website, phone, company, address} = profile
  const {street, suit, city, zipcode} = address

  return (
    <li className="list-container">
      <div>
        <img
          className="img"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
          alt="avatar"
        />
      </div>
      <div className="details-container">
        <h1>{name}</h1>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Phone:</span> {phone}
        </p>
        <p>
          <span>Company:</span> {company.name}
        </p>
        <p>
          <span>Website:</span> {website}
        </p>
        <p>
          <span>Address:</span> {street}, {suit}, {city}, {zipcode}
        </p>
      </div>
    </li>
  )
}

export default ProfileCard
