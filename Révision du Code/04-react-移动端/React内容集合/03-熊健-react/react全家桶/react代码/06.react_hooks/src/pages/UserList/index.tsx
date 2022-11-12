import { connect } from "react-redux";
import { RootState, Users } from "../../store/types";

interface Props {
  loading: boolean;
  users: Users;
}

function UserList(props: Props) {
  const { loading, users } = props;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (users.length) {
    return (
      <div className="row">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img
                  src={user.avatar_url}
                  style={{ width: "100%" }}
                  alt={user.login}
                />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return <h1>Enter Name To Search</h1>;
}

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
  users: state.users,
});
// 注意：不能为null
// const mapDispatchToProps = {};
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
