+++
title= 'FortiGate - Setup and Config notes'
date= '2025-05-22'
description= 'Guid with some common configuration that i used, CLI and security best practices for fortigate firewalls'
tags = ['fortigate', 'firewall', 'networking', 'security' ]
+++
  

Over the years, I’ve worked with many FortiGate units across different sites. This are some of my notes where compiles some of the most common changes, configurations, and CLI commands that I use to standardize and secure deployments.
<!--more-->
  
---

## 🔐 Security Settings

### **System → Administrators**

- Delete unused admin accounts
    
- Add email for alerts
    
- Enable SMS or FortiToken two-factor authentication
    

### **System → Settings → Email Service**

- SMTP server: smtp.gmail.com
    
- Port: 465
    
- Security mode: smtps
    
- Use Google app password for authentication
    


### **Log & Report → Email Alert Settings**

- **From**: example.system@gmail.com
    
- **To**: franco.lopez@email.com
    
- Enable alerts for:
    
    - Intrusion detected
        
    - Virus detected
        
    - Policy denied traffic
        
    - Admin login/logout
        
    - Firewall auth failure
        
    

---

## **🔑 FortiToken Setup**

1. Navigate to **User & Device → FortiTokens**
    
2. Generate the two free tokens
    
3. Assign token to a user
    
4. Go to **System → Administrators** and activate 2FA
    


---

## **🛡️ Firewall Policies**

Make sure the following is enabled:

**System → Feature Visibility → Multiple Interface Policies**

This allows creating granular firewall rules between interfaces.

---

## **🧰 Useful CLI Commands**

  

### **Record GUI Actions**

  
Use this to monitor what the GUI is doing in CLI:

```bash
diag debug cli 6
diag debug enable
# Then perform actions via GUI
```

### **Search configuration in CLI**

```bash
show full | grep "test 123"
show full | grep "test 123" -r
show | grep "test 123"
```

---

## **✅ Other Tips**

- Always set up **backup email alerts** and test them.
    
- Export configurations regularly.
    
- Use **policy descriptions** to document what each rule does.
    
- Segment networks by VLAN/interface as much as possible.
    
- Prefer **static routes** for site-to-site VPNs when possible.
    
* Enable DNS Server



Useful video from youtube:
[Initial Configuration Video (YouTube)](https://www.youtube.com/watch?v=nlGJSI1vj2c)

---

This is a living cheatsheet based on my hands-on experience with FortiGate firewalls across different sites and business needs. If you’re new to FortiOS or want to tighten your network security posture, this baseline config is a great place to start.

  

— Franco