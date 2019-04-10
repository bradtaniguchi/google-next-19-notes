# dev205: app modernization and migration with APIs

joshua rogers
parna bhattacharya

---

- thinking about end users first, before the technologies. 
- "outside in thinking"
- "Woolies X" largest realtailer in Australia.

---

## agenda
- paths twoards app modernization and app migration
- app modernization and migration challenges
- woolworths connected jounry
- woolworths modernisation and migration strategy
- omnichannel experience - architecture and demo

---

### modernization and migration challenges
- business continuity
- security risks
  - when data is being migrated, its being duplicated.
  - needs to be done in a secure way.
- visibility 
- interoperability
- unmanaged services
  - migrate to microservice architecture. might end up with unintended behavior

---

### introduction to apigee (another talk going over this product again)
- apigee could be used as a "middle-man" between clients and actual back-ends. 
  - less of an api use-case and more of a generic use-case it seems.
  - act as a security mediation and enforcement layer.
  - the protocols and mechanisms might differ from the legacy app.
  - full visbility, has required how the migration is progressing
  - api facade (sounds useful)
  - service management
  - acts as a "service mesh" (mentioned this in another talk)

----

### woolworths
- digitial transformation, websites were getting outpaced.
- migrated into the cloud, and "lifted and shift" and "modernize"

- woolies X, combined a number of efforts together.
- 11.5m award members, only 24m in austrailia.
- only 12m households, almost 1:1 for every household (!)
- 2b in transactions, a lot for a supermarket.

---

### in the beginning
- 2 businesses, 6 api developers, 15 apis, 45 trasactions per seconds. 
- apigee streamlined it:
  - developer poral
  - permissions
  - api abuse prevention
  - api monitoring
  
- new services are connected, via data. 
- 10 businesses, 18+ api developers, 1k apis, 480 transactions per second.
- api is an abstraction layer.
- only year and a half in, to re-developer loader scripts.
- test and go thru all scenarios to make sure everything is "ok"
- 30 minute window of execution.

---
### Olive Demo

- AI assistent.
- added, updated online wooliesworth shopping cart using google assistant
- used dialog flow, GKE, and APIGEE.




  

