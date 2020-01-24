# qtum message signing in qtum

This example produces the same signed message as that returned by the `signmessage` command.

First, import the keypair we'll be using for the example:

```
# pubkey: qUbxboqjBRp96j3La8D1RYkyqx5uQbJPoW
qcli importprivkey cMbgxCJrTYUqgcmiC1berh5DFrtY1KeU4PXZ6NZxgenniF1mXCRk
```

Using the cli to sign "hello world":

```
qcli signmessage qUbxboqjBRp96j3La8D1RYkyqx5uQbJPoW "hello world"

HzWV5Pkukar3MRJ7Q6zuwISJSISEIYAGYLf4rOULZopLTtO61ak/HBaFxQlY7+QP1Wa4r9sLLvZ5ATJ3UGOAzh8=
```

And to verify it:

```
qcli verifymessage qUbxboqjBRp96j3La8D1RYkyqx5uQbJPoW \
  "HzWV5Pkukar3MRJ7Q6zuwISJSISEIYAGYLf4rOULZopLTtO61ak/HBaFxQlY7+QP1Wa4r9sLLvZ5ATJ3UGOAzh8=" \
  "hello world"

true
```

Running `index.js` should yield the same signature bytes:

```
msg hash: 33fd9f69e51a562f5457e71dcf14bd723cdc9134bae6cdef5891baa8386ebb5c
sig base64: HzWV5Pkukar3MRJ7Q6zuwISJSISEIYAGYLf4rOULZopLTtO61ak/HBaFxQlY7+QP1Wa4r9sLLvZ5ATJ3UGOAzh8=
sig hex: 1f3595e4f92e91aaf731127b43aceec0848948848421800660b7f8ace50b668a4b4ed3bad5a93f1c1685c50958efe40fd566b8afdb0b2ef679013277506380ce1f
```

The signature is actually consisted of three parts:

```
V: 1f
R: 3595e4f92e91aaf731127b43aceec0848948848421800660b7f8ace50b668a4b
S: 4ed3bad5a93f1c1685c50958efe40fd566b8afdb0b2ef679013277506380ce1f
```

Where V is the version string.
