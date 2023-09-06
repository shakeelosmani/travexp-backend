export const GetUserByUidQuery = `
	SELECT
		email,
		firstName,
		lastName,
		uid,
		avatar,
		phoneNumber,
		emailVerified
	FROM
		users
	WHERE
		uid = ?
`