# DBS-305-building-amazing-apps-with-cloud-firestore

- natalie vais
- ben whitehead

---

## overview
- intro to cloud firestore
- whats new
- customer architectures
- demo
- Q & A

---
## managed databses services available right now
- cloud memory store (redis)
- cloud firestore
- cloud bitable
- cloud sql, etc

---
## mobile databases the hard-way
- need database + REST API + AUTH + SYNC + local storage
- these are the reason cloud fireStore was built, does all of them
- "letting clients talk to the DB creates challenges"
  - unauthed, and data from clients,
  - auth and security rules help
    - acts like the middle tier between the database and clients
- cross platform is important
- offline support

---
## database design
- smallest thing in firestore is a **document**
- documents are grouped into **collections**
- works great for scale and well with developers

---
## what is new
- finally out of beta
- more regions
- access firestore from the cloud console (new)
  - operate in the same project in firebase and cloud console

---
## customer examples
- iot
- nformation delivery
- mobility
- digital agency
- media

- all needed quick time to market
- needed to scale with buisness
- lean development teams, operate in servless environment

**hawkin dynamics example**
**Nerdery with google**
  - consulting company
  - built the app and site
  
---

**demo**
- 40k pixels being updated from 40k documents in firestore being updated in tandem-live
- service account on cloud function, can write to bigQuery. Fine grain control
- stackdriver logging from cloud function
- looking at bigQuery dataset
- dashboard in dataStudio, fully integration with org structure.

---
google-group: google-cloud-firestore-discuss
SO: google-cloud-firestore

---

- the GCP side of things, firestore shouldering the burden puts info about firestore into stackdriver.
  more products are going this way. Its basically automatic.
  
  
  
  
  
  
  
