+++
title= 'FortiGate - Setup and Config notes'
date= '2025-05-22'
description= 'Guia de configuracion que he usado para equipos fortigate'
tags = ['fortigate', 'firewall', 'networking', 'security' ]
+++
  
+++

title= ‘FortiGate - Notas de configuración y puesta en marcha’

date= ‘2025-05-22’

description= ‘Guía con configuraciones comunes que uso, comandos CLI y buenas prácticas de seguridad para firewalls FortiGate.’

tags = [‘fortigate’, ‘firewall’, ‘networking’, ‘security’]

+++

  

A lo largo de los años, he trabajado con muchos equipos FortiGate en diferentes ubicaciones. Estas son algunas de mis notas donde recopilo los cambios, configuraciones y comandos CLI más comunes que utilizo para estandarizar y asegurar las implementaciones.

```
<!--more-->
```

---

## **🔐 Configuraciones de Seguridad**

  

### **System → Settings → Email Service**

- Servidor SMTP: smtp.gmail.com
    
- Puerto: 465
    
- Modo de seguridad: smtps
    
- Usar una contraseña de aplicación de Google para autenticación
    

  

### **System → Administrators**

- Eliminar cuentas de administrador no utilizadas
    
- Añadir correo para alertas
    
- Activar autenticación de dos factores por SMS o FortiToken
    

  

### **Log & Report → Email Alert Settings**

- **De**: example.system@gmail.com
    
- **Para**: franco.lopez@email.com
    
- Habilitar alertas para:
    
    - Detección de intrusión
        
    - Virus detectado
        
    - Tráfico denegado por política
        
    - Inicio/cierre de sesión de administrador
        
    - Fallo de autenticación en el firewall
        
    

---

## **🔑 Configurar FortiToken**

1. Ir a **User & Device → FortiTokens**
    
2. Generar los dos tokens gratuitos
    
3. Asignar un token al usuario
    
4. Activar 2FA en **System → Administrators**
    

---

## **🌐 Configuración DNS**

  

Activa esta opción para editar la DNS:

**System → Feature Visibility → Network → DNS SERVER**

---

## **🛡️ Políticas del Firewall**

  

Asegúrate de habilitar:

**System → Feature Visibility → Multiple Interface Policies**

  

Esto permite crear reglas de firewall detalladas entre interfaces.

---

## **🧰 Comandos CLI Útiles**

  

### **Monitoreo General & Debug**

```
get system status
get system performance status
get system performance top
diagnose sys uptime
diagnose sys session list
diagnose sys top
```

### **Interfaces y Ruteo**

```
get system interface
diagnose ip address list
get router info routing-table all
execute traceroute www.google.com
```

### **Logs y Diagnóstico**

```
diag debug cli 6
diag debug enable
# Ejecutar acciones en la GUI
diag debug disable

execute log display
diagnose debug enable
diagnose debug application event -1
diagnose debug disable
```

### **Comandos VPN**

```
get vpn ipsec tunnel summary
diagnose vpn ssl restart
diagnose debug enable
diagnose debug application ike -1
diagnose debug console timestamp enable
```

### **Respaldo y Restauración**

```
execute backup config ftp <server> <usuario> <contraseña> <archivo>
execute restore config ftp <archivo> <server> <usuario> <contraseña>
```

### **Firmware y Actualizaciones**

```
get system status
execute restore image tftp <nombre-imagen> <ip-tftp>
```

### **Gestión de Políticas y Objetos**

```
show firewall policy
show firewall address

config firewall address
edit Servidor1
set subnet 192.168.10.10 255.255.255.255
set type ipmask
next
end
```

---

## **🧱 Tareas Comunes en FortiGate**

- Configurar rutas estáticas para VPN y conmutación por error WAN
    
- Establecer reglas SD-WAN (System → Feature Visibility)
    
- Configurar subinterfaces VLAN para segmentación LAN
    
- Utilizar VDOMs para separar clientes o departamentos
    
- Activar logs en todas las reglas del firewall
    
- Ajustar perfiles de filtrado DNS en Security Profiles
    
- Programar backups automáticos a FTP/SFTP o USB
    
- Configurar FortiCloud o FortiAnalyzer si están disponibles
    

---

Estas notas están basadas en mi experiencia práctica con firewalls FortiGate en diferentes entornos. Espero que sean útiles para quien esté configurando o manteniendo estos dispositivos.

  

— Franco