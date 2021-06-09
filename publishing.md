After making changes, in order to publish, you need to:

# publish to npm:
- bump package version in package.json, commit & push.
- login to npm (public registry) and publish npm package.

# publish to coacoapods
- create a git tag to match the version in package.json (git tag ‘X.X.X’)
- push git tag (git push —tags)
- push the pod (pod push trunk react-native-wallet-pass.podspec)