import "./UserProfile.css";
function UserProfile({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>
        <a href={`mailto:${email}`}>{name}</a>
      </h3>
    </div>
  );
}
export default UserProfile;
