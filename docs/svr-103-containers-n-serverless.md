# "cloud run talk"

First started with app-engine, came up before serverless was a thing.
Added cloud functions, and these two together provide servless compute.
so far very successful so far.
"Google is my SRE"

---

serverless is not accessible to everyone. 
- "How can we use existing binaries?"
- "We can't be locked in"
- "Can you support language ____?"

---
## What is serverless?
**operational model**
- no infra management
- managed security
- pay only for usage
**programming model**
- service-based
- event-driven
- open

---

**growth of containers in the industry**
- way to easily move code and binaries between environments.
- "what if it could be easier?"

---

**demo**
- go to cloud run, select container to deploy.
- click create **done**

"what can I do with cloud run?"
- there are broad cases, but allows cloud run to run deploy "stateless cloud run"

**examples:**
- website
- api endpoint
- mobile backend
- webhook
- private
- microservices
- async tasks

---

## features of cloud run
**any programing language**

**any library**

**any binary**

**ecosystem of base images**

containers are industry standard (better than a zip file)

---

## talker from airbus.
- satellite imagery as a service
- different use cases from sat images.
- requires injecting thousands of images, gbs of raw compressed data.
- this leads to a number of challenges.
- minimize storage size, and respond to changes.

- save storage costs, no duplication of data

---

**steps**
 (wow why are these even listed haha)
1. code
2. build
3. run

---
**code**
- container runtime contract
- http on a given port.
- **no local state**, can use persistent state. 


**build**
- Docker image and push to container registery
- cloud build, no local tooling, can also do docker or other stuffs
- CI/CD

**run**
- container registery, one click/command, deploy to cloud run
- stable http/url if you want to expose to internet..
- **happens in a few seconds**


---
**demo**
- libreoffice headless to convert ms-word to pdf function
- using docker-file
- point to google cloud registry
(still in beta)

---
"natively serverless"

- in the old world, need to provision servers. Want to overprovision serviers.
- great thing in cloud run, it auto-scales.
- scales up fast, scales down to zero.
- pay for exact cpu, memory, and number of requests.
- down to 100ms

--- 
back to demo, transform 1k pdfs in 1 minute.
- 2gb container with open office scaled.

---

third pillar is " one experience where you want it"
- portability means different things to different people.
- "what about kubernetes and KE?"
- kubernetes is good for the operator, but not for the developer
- cloud run on GKE, 
- same as cloud run but on kubernetes
- more flexibility and control, operator required.
- integrates with k8s-based policy, custom nodes, hardware accelerators VPC
- lets you use existing investment in kubernetes.

---
fully serverless, 
- no cluster to manage with cloud run
**or**
- cloud run on GKE


---

all under `gcloud run`

- did this based on knative
- common api and runtime environment for serveing workloads.
- portable of experiences tooling and workloads between knative environments
- can even run serverlss on-prem.
knative.dev

- stackdriver integration as usual



- svr302

twitter links
@ryangregg
@steren
