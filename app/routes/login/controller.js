{{#if session.isAuthenticated}}
  Logged in as {{session.currentUser.displayName}}
  <button {{action "signOut"}}>Sign out</button>
  {{outlet}}
{{else}}
  <button {{action "signIn" "twitter"}}>Sign in with Twitter</button>
{{/if}}