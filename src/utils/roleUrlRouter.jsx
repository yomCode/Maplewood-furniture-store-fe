import jwt_decode from "jwt-decode";
 

export const decodeJwt = (token) => {
    const decoded = jwt_decode(token);
    
    /* prints:
    * { iss: "self",
    *   exp: 1393286893,
    *   iat: 1393268893  
    *   roles: "USER"
    *   sub: email
    * }
    */
    // decode header by passing in options (useful for when you need `kid` to verify a JWT):
    const decodedHeader = jwt_decode(token, { header: true });
    console.log(decodedHeader)

    return decoded

/* prints:
 * { typ: "JWT",
 *   alg: "HS256" }
 */
}

// export const isTokenValid = (token) => {
//     const decoded = jwt_decode(token);

//     if

// }

export const redirectToUserPage = (location, navigate, roles) => {
    let from = location.state?.from?.pathname

        if(roles === "ADMIN" || roles === "SUPERADMIN")
            from = location.state?.from?.pathname || "/admin"
        else if(roles === "USER")
            from = location.state?.from?.pathname || "/shop"

    navigate(from, { replace: true })
}