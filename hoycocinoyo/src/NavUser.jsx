// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { TiShoppingCart } from "react-icons/ti";

// function NavUser() {
//   const { clubName } = useParams();
//   const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
//   const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

// //   useEffect(() => {
// //     // Recuperar el carrito del localStorage al montar el componente
// //     if (cartFromLocalStorage) {
// //       dispatch(setCartFromLocalStorage(cartFromLocalStorage));
// //     }
// //   }, [dispatch]);



//   //* -------------------------------------------------- USER -----------------

// //   const setUserToPost = (userToPost) => {
// //     if (!isLoading && user) {
// //       return {
// //         id: userToPost?.sub, //google ok - facebook ok - auth0 ok - siempre el mismo para =user =medio
// //         name: userToPost?.name, //GOOGLE OK - FACEBOOK OK - auth0 aca tiene email
// //         mail: userToPost?.email || null, //google ok - facebook NO - auth0 si
// //       };
// //     }
// //   };
//   const userData = setUserToPost(user);

// //   useEffect(() => {
// //     // Verifica si user está cargado y no está en modo de carga
// //     if (user && !isLoading && !isUserLoaded) {
// //       // Realiza el dispatch solo cuando user está cargado
// //       dispatch(postUser(userData));
// //       dispatch(getMyBolicheID(clubName));
// //       setIsUserLoaded(true);
// //     }
// //   }, [user, isLoading, isUserLoaded, dispatch, userData]);


//   //* ------------------------------------------------- BOLICHE --------------
// //   useEffect(() => {
// //     dispatch(getMyBoliche(clubName));
// //   }, []);

// //   const myBolicheState = useSelector(state => state.myBoliche)

//   //* ---- GIF LOADING NAV BAR ----------------------------------------------------------
// //   if (isLoading) {
// //     return (
// //       <div className={styles.NavBarUser}>
// //         <img src={loadingGif} alt="Loading..." className={styles.loading} />
// //       </div>
// //     );
// //   }

//   //* RENDER NAV BAR CARGADA
//   return (
//     <div className={styles.NavBarUser}>
//       {
//         // render de foto perfil o iniciales en home
//         isAuthenticated && (
//           <div>
//             {user.picture && (
//               <Link to={`/${clubName}/profile`}>
//                 <img
//                   className={styles.circleImage}
//                   src={user.picture}
//                   alt={user.name}
//                 />
//               </Link>
//             )}
//             {user.given_name && user.family_name && !user.picture && (
//               <Link to={`/${clubName}/profile`}>
//                 <div className={styles.circleWithText}>
//                   {user.given_name[0] + user.family_name[0]}
//                 </div>
//               </Link>
//             )}
//             {!user.picture && !user.given_name && !user.family_name && (
//               <Link to={`/${clubName}/profile`}>
//                 <div className={styles.circleWithText}>{user.nickname[0]}</div>
//               </Link>
//             )}
//           </div>
//         )
//       }


//       <Link to={`/${clubName}/home`} style={{ textDecoration: "none" }}>
//         <div className={styles.containerLogos} >
//           <img className={styles.circleLogo} src={myBolicheState.image} alt="Logo" />
//           <div className={styles.byLetras}>by</div>
//         </div>
//         <img src={charlieLetras} alt="Charlie" className={styles.logoLetras} />
//       </Link>

//       <Link to={`/${clubName}/cart`} className={styles.cartLink}>
//         <div className={styles.cartIconContainer}>
//           <div className={styles.circleIcon}>
//             <TiShoppingCart />
//           </div>
//           {itemCount > 0 && <div className={styles.itemCount}>{itemCount}</div>}
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default NavBarUser;
