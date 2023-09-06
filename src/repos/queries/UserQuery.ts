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

export const GetUserByEmailQuery = `
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
		email = ?
`

export const SaveUserQuery = `
	INSERT INTO users (
		email,
		firstName,
		lastName,
		uid,
		avatar,
		phoneNumber,
		emailVerified
	)
	VALUES (?, ?, ?, ?, ?, ?, ?)
`