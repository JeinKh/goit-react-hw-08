import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => dispatch(logOut())}>
        LogOut
      </button>
      <h3>Welcome back {user.name}</h3>
    </div>
  );
};

export default UserMenu;
