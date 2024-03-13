// indexedDbUser.js

// Constant key to identify the user data
const USER_KEY = "currentUser";

// Function to initialize IndexedDB and open the database
function openDatabase() {
	return new Promise((resolve, reject) => {
		var request = indexedDB.open("userData", 1);

		request.onerror = function (event) {
			reject("Database error: " + event.target.errorCode);
		};

		request.onupgradeneeded = function (event) {
			var db = event.target.result;
			db.createObjectStore("users");
		};

		request.onsuccess = function (event) {
			var db = event.target.result;
			resolve(db);
		};
	});
}

// Function to add user data to IndexedDB
export function addUser(userData) {
	return new Promise((resolve, reject) => {
		openDatabase()
			.then((db) => {
				var transaction = db.transaction(["users"], "readwrite");
				var objectStore = transaction.objectStore("users");

				// Store the user data with a constant key
				objectStore.put(userData, USER_KEY);

				transaction.oncomplete = function () {
					resolve("User data added successfully");
				};

				transaction.onerror = function (event) {
					reject("Error adding user data: " + event.target.errorCode);
				};
			})
			.catch((error) => {
				reject(error);
			});
	});
}

// Function to get user data from IndexedDB
export function getUserData() {
	return new Promise((resolve, reject) => {
		openDatabase()
			.then((db) => {
				var transaction = db.transaction(["users"], "readonly");
				var objectStore = transaction.objectStore("users");

				// Retrieve the user data using the constant key
				var request = objectStore.get(USER_KEY);

				request.onsuccess = function (event) {
					var userData = event.target.result;
					resolve(userData);
				};

				request.onerror = function (event) {
					reject("Error retrieving user data: " + event.target.errorCode);
				};
			})
			.catch((error) => {
				reject(error);
			});
	});
}

// Function to delete user data from IndexedDB
export function deleteUser() {
	return new Promise((resolve, reject) => {
		openDatabase()
			.then((db) => {
				var transaction = db.transaction(["users"], "readwrite");
				var objectStore = transaction.objectStore("users");

				// Delete the user data using the constant key
				objectStore.delete(USER_KEY);

				transaction.oncomplete = function () {
					resolve("User data deleted successfully");
				};

				transaction.onerror = function (event) {
					reject("Error deleting user data: " + event.target.errorCode);
				};
			})
			.catch((error) => {
				reject(error);
			});
	});
}
