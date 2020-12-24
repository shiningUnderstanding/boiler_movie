/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function (ComposedClass, reload, adminRoute = null) {
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(async (response) => {
        if (!response.payload.isAuth) {
          if (reload) {
            props.history.push("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (reload === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history, user.googleAuth]);
    return <ComposedClass {...props} user={user} />;
  }

  return AuthenticationCheck;
}
