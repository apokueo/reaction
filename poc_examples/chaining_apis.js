const fetchCurrentUser = () => (dispatch) => fetch(`user`) 
	.then(response => response.json()) 
	.then(userData => {
		dispatch(setUserData(userData));

		// Get user's profile
		fetch(`profile/${userData.profileId}`) 
			.then(response => response.json()) 
			.then(profileData => dispatch(setProfileData(profileData)));
	}
    );
};	
