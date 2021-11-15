# Lab 8 - Starter

1. Within a Github action that runs whenever code is pushed. We do this to automate our testing everytime our existing software based on certain events, in this case when we push our code to ensure that changes are functional.
2. No, we use E2E testing to test the entire web application, emulating multiple potential user actions.
3. No I would not use a unit test for this. In this case, there are many connected features such as the user's browser page as well as your own. These components are interacting with each other, and this action is not really that small scale when you think of it. So for those reasons I would not use a unit test.
4. I would use a unit test. This is a very simple feature that just checks if your function prevented a user from typing in something with more than 80 letters. This is very small scale, and there aren't really any moving parts in this application.
