# Sec 218: Designing the right security architecture for your APIs

matt blumberg - product manager
Joel D'sa, Security Tech lead - Apigee

---

## agenda
- power of apis
- importance of visibility
- current threats
- architecture form the past and future trends
- how to secure your apis


---

apis are a way to provide structure 
in a portable and scalable way.

### Why security can't be an afterthought

**apigee api management**
- developer management
- api analytics
- api services

- business examples for hotels via apis

- apis are powering business disruptions.
- many cases where companies didn't control APIs well
- we cant prevent all bugs, but visibility is important
- happens far to often.
- by 2022 apis will be the primary attach vector
---
### Importance of visibility
"can't secure what you can't see"

apigee takes two prongs approach
- operations team visibility
- security team visibility 

- "52%" will leave mobile app if it takes longer than 3 seconds to load.
- need to be able to identify issues before users do.
- many issues are found thru the Ops team, instead of
  the security team. 

---
### Current threats

- security is a broad field. Lots of things to consider.
- very hard to tackle at the same time.
- "take data based decisions"

---

**what threats do APIs face?**
- very similar to software threats.
- basic software bugs
  - lots of people buy lots of tools, and put stuff together
  - get basic software engineering right.
  - good tests
  - code reviews
  - software security reviews
  - secure software development stack
  - third party penetration tests
  - consistent change management processes
- injection threats
  - input validation, great protection.
  - easy to add input-validation.
  - 2 things to think about
    1. consistency - very important
    2. use of shared libraries.
    - apigee provides input validation out of the box.
- service availability threats
  - most common question is to prevent DDos attacks?
  - scale out to handle DDos.
    - apigee provides rate limits.
    - distrubuted caches, return frequent responses to frequent requests.
  - rely on DDOS protection offered by google frontend load balancrs
  - cache responsees to frequent requests
  - leverage apigree policies
- user identity
  - protect the user's of the API. 
  - going over history of treats to user info.
    - in the mid 1990s. life was "simple"
    - as internet grew more complicated, more sites. first inputs was usernames/passwords
    - as it got more complex, reusable business logic got deployed to the same container
    - concept of "sticky sessions"
    - mobile stateless apps started to "shift". 
      - mobile used api gateways, but web still used cookies.
      - underlying security model didn't change.
      
  - security has not changed, exchange user credentials for cookies.
  - sticky session perpetuated this design, permiters.
  - permiters are good, isolated.
  - microservices, changed from original approach.
  - need an api gateway to protect them.
  - in a world were you deploy microservices to a permieter, so how do you "control" it?
  - deploy api gateway, expose only whats required and manage relationships between service providers and consumers.
  - deploy service mesh, be able to compose applications from microservices.
  - manage identities effectively.
  - "Google cloud's identity platform"
  - another remnant of traditional approach.
    - each service will access auth and authz server.
    - the two auth and authz services become single points of failure.
    - migrate to "jwt tokens"
    - connect to OIDC server, get OIDC to get OAuth2 server, only get access to what for a limited time.
    - "zero trust, authenticate everyone all the time"
  - keep user experience as fluid as possible.
  - developer portal, use apigee out of the box developer portal
    - allows api consumer, to know what is availble to access.
    - try out API, and register for a key, automated, with metrics
    
- insider treats
  - a lot of people are not aware, but lots of companies have been comprimised due to it.
  - time bound dedicated access, also for employees and priviliedged users.
  - enforce auth to access API program.
  - effective change mangement
- scame and abuse
  - lots are bot traffic can drive significant percentage of your traffic
  - passwords are commonly shared across sites
  - 2 things todo, prevention, and visibility
    - prevention
      - more on the client, authenticate clients.
      - valid use case for non-auth clients, what todo?
        - recaptcha, slows spam and abuse traffic. 
        - v2 was very popular, but is a jarring traffic
        - v3 just gives a score automatically.
        - "clock block model" for another version.
    - visbility
      - deploy cloud armor
      - apigee sense, get a better view on what attackers are doing
      
---

### recap
- api management is a key part of your security architecture
- api security should not be an afterthought
- for a secrutruec security approach use data and metrics to responsed.













