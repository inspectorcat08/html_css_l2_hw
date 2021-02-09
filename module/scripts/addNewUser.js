function createFormField (config) {
	const {
			name, 
			text, 
			placeholder,
			type,
			minlength
	} = config

	const label = document.createElement('div');
	label.textContent = text;
	label.className = 'label';

	const input = document.createElement('input');
	input.name = name;
	input.placeholder = placeholder;
	input.type = type
	input.minlength="5"
	input.required = true

	const wrapper = document.createElement('div');
	wrapper.className = 'form-field';

	wrapper.appendChild(label)
	wrapper.appendChild(input)

	return wrapper

}

const FORM_CONFIG = [
	{
		name: 'name',
		text: 'Name',
		placeholder: 'Enter you user name',
		type: 'text',
	},
	{
		name: 'email',
		text: 'Email',
		placeholder: 'Enter you user email',
		type: 'email',
	},
	{
		name: 'website',
		text: 'Website',
		placeholder: 'Enter you user website',
		type: 'url',
	},

]

const BUTTON_CONFIG = [
	{
		type: 'button',
		text: 'Cancel',
		color: 'danger',
	},
	{
		type: 'submit',
		text: 'Save',
		color: 'success',
	},

]

function createButton (config) {
	const { 
		type,
		text,
		color,
	} = config

	const button = document.createElement('button')
	button.type = type
	button.textContent = text
	button.className = `button-${color}`

	return button
}

function onSubmit(event) {
	event.preventDefault()

	const {
		target: {
			elements
		}
	} = event

	const newUser = {
		name: elements.name.value,
		email: elements.email.value,
		website: elements.website.value,
		id: Math.random(),
	}

	if (newUser.name, newUser.email, newUser.website) {
		createUserCard(newUser, 'new-user')
		this.remove()
		formCount = 0
	}

}

let formCount = 0

function onButtonClick(event) {

	const form = document.createElement('form');
	formCount += 1

	if (formCount < 2) {

		FORM_CONFIG.forEach(config => {

			const formField = createFormField(config)

			form.appendChild(formField)
		})
		
		const addUserButton = event.currentTarget

		const buttonsWrapper = document.createElement('div')
		buttonsWrapper.className = 'buttons-wrapper'

		BUTTON_CONFIG.forEach(config => {
			const button = createButton(config)

			if (config.type === 'button') {
				button.onclick = () => {
					form.remove()
					formCount = 0
				}
			}

			buttonsWrapper.appendChild(button)
		})

		form.appendChild(buttonsWrapper)

		form.onsubmit = onSubmit

		addUserButton.after(form)
	}
}

function addNewUserButtonHandler () {
	const buttonElement = document.getElementById('add-new-user');

	buttonElement.onclick = onButtonClick;
}