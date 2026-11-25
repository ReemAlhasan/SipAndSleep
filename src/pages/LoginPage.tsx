// src/pages/LoginPage.tsx
// The page you see when you are not logged in.
// You can log in, or create a new account.

import { useState, type FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase";

// Turn Firebase's error codes into friendly messages
function getErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/invalid-email":
        return "That email address does not look right.";
      case "auth/invalid-credential":
        return "Wrong email or password.";
      case "auth/email-already-in-use":
        return "There is already an account with this email.";
      case "auth/weak-password":
        return "The password needs at least 6 characters.";
    }
  }
  return "Something went wrong. Please try again.";
}

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // true = create a new account, false = log in
  const [isNewUser, setIsNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // true while we wait for Firebase to answer
  const [isWaiting, setIsWaiting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser from reloading the page
    setErrorMessage("");
    setIsWaiting(true);

    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Nothing more to do here: App.tsx notices the login and shows the app.
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    }

    setIsWaiting(false);
  }

  function switchMode() {
    setIsNewUser(!isNewUser);
    setErrorMessage("");
  }

  let buttonText = isNewUser ? "Create account" : "Log in";
  if (isWaiting) {
    buttonText = "Please wait…";
  }

  return (
    <main className="login-page">
      <h1>Sip &amp; Sleep</h1>
      <p>Drink well. Sleep well. Feel well.</p>

      <h2>{isNewUser ? "Create an account" : "Log in"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete={isNewUser ? "new-password" : "current-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            required
          />
        </div>

        {errorMessage && <p role="alert">{errorMessage}</p>}

        <button type="submit" disabled={isWaiting}>
          {buttonText}
        </button>
      </form>

      <button type="button" onClick={switchMode}>
        {isNewUser
          ? "I already have an account"
          : "New here? Create an account"}
      </button>
    </main>
  );
}

export default LoginPage;
