const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='

const createUserCard = (user, ID) => {
	const {
		name,
		email,
		website,
	} = user

	// const name = user.name
	// const email = user.email

	const userCard = document.createElement('div')
	// userCard.textContent = name
	userCard.className = 'user-card'

	const info = document.createElement('div')
	info.className = 'user-info'

	const userName = document.createElement('h4')
	userName.textContent = name

	const userEmail = document.createElement('div')
	// userEmail.textContent = 'Email: ' + email + ', website: ' + website
	userEmail.textContent = `Email: ${email}, website: ${website}`

	const userAvatar = document.createElement('img')
	userAvatar.src = AVATAR_URL + user.name

	info.appendChild(userName)
	info.appendChild(userEmail)
	userCard.appendChild(userAvatar)
	userCard.appendChild(info) // img.after(info)

	
	if (ID === "new-user") {
		userCard.id = ID
		setTimeout(() => userCard.id = "", 5000)
	}

	elementsHolder.appendChild(userCard)
}

const showUsers = users => {
	// const newTag = document.createElement('div')
	// newTag.textContent = 'Im created'

	// document.body.appendChild(newTag)

	users.forEach(createUserCard)
}