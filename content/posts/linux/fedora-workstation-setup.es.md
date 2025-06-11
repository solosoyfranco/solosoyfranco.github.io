+++
title= 'Fedora 42 Workstation con Hyprland & VFIO'
date= '2025-05-29'
description= 'guia de installation para fedora Linux workstation con Hyprland, KVM GPU passthrough, y Looking Glass.'
tags = ['fedora', 'hyprland', 'kvm', 'virtualization', 'linux', 'vfio' ]

+++

  

#  Configuracion de Fedora Workstation  

Aqui algunas de mis notas de mi Fedora 42 con entorno de videojuegos virtualizados con KVM. 
<!--more-->

- Actualizacion del sistema
    
- Instalacion de Hyprland & SDDM
    
- GPU passthrough con VFIO
    
- KVM + QEMU + Looking Glass
    
- Kitty terminal con copiado y pegado al seleccionar
    
- Aplicaciones esenciales (WhatsApp, Spotify, VSCode, VLC, Thunderbird)
    
- Timeshift sistema de backup 
    
- Hugepages para rendimiento de VM 
    
- Flatpak + applicaciones de productividad
    
- Personalizacion del tema
    
- Scripts de automatizacion
    
- configuacion de SSH, GPG keys, y Git
    
- Contenedores (Podman, Docker)
    

---

##  Actualizacion del sistema

```
sudo dnf update
```

instalacion con Flatpak:

```
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install flathub com.discordapp.Discord
flatpak install flathub com.spotify.Client
flatpak install flathub com.visualstudio.code
flatpak install flathub org.videolan.VLC
flatpak install flathub org.mozilla.Thunderbird
```

---

## Hyprland & SDDM 

  

seguido por:

[https://github.com/mylinuxforwork/dotfiles/wiki/Installation](https://github.com/mylinuxforwork/dotfiles/wiki/Installation)

  

instalar sddm, habilitarlo, y reiniciar:

```
sudo dnf install sddm
sudo systemctl enable sddm
sudo reboot
```

---

## Personalizacion de Kitty Terminal 

  

Al seleccionar-> auto-copy to clipboard:

```
~/.config/kitty/kitty.conf
copy_on_select yes
clipboard_control write-clipboard write-primary
```

---

## VFIO GPU Passthrough Setup (NVIDIA 4090)

  

### Pasos:

1. Identifica tu GPU IDs:
    

```
lspci -nn | grep -E "NVIDIA"
```

2. Crear VFIO config:
    

```
sudo nano /etc/modprobe.d/vfio.conf
```

```
options vfio-pci ids=10de:2684,10de:22ba
softdep nvidia pre: vfio-pci
```

3. Blacklist Nouveau:
    

```
sudo nano /etc/modprobe.d/blacklist-nouveau.conf
```

```
blacklist nouveau
options nouveau modeset=0
```

4. Agregar VFIO a initramfs:
    

```
sudo mkdir -p /etc/dracut.conf.d
sudo nano /etc/dracut.conf.d/vfio.conf
```

```
add_drivers+=" vfio vfio_iommu_type1 vfio_pci "
force_drivers+=" vfio_pci "
omit_drivers+=" nouveau "
install_items+=" /etc/modprobe.d/vfio.conf /etc/modprobe.d/blacklist-nouveau.conf "
```

5. Agregar parametros de kernel:
    

```
sudo nano /etc/default/grub
```

```
GRUB_CMDLINE_LINUX="rhgb amd_iommu=on iommu=pt vfio-pci.ids=10de:2684,10de:22ba modprobe.blacklist=nouveau"
```

6. Aplicar cambios:
    

```
sudo grub2-mkconfig -o /boot/grub2/grub.cfg
sudo dracut --force --kver $(uname -r)
sudo reboot
```

Despues de reinicio:

```
lspci -nnk -d 10de:2684  # Should show vfio-pci in use
```

---

##  Hyprland Keybindings (Detallado)

  

Editar:

```
nano ~/.config/hypr/conf/keybindings/default.conf
```

### Ejemplos de configuacion:

```
# Launch app launcher (Rofi)
bind = $mainMod, SPACE, exec, sh -c 'pkill rofi || rofi -show drun -replace -i'

# Reload Hyprland config
bind = $mainMod, R, exec, hyprctl reload

# Lock screen
bind = $mainMod, L, exec, swaylock

# Launch terminal
bind = $mainMod, RETURN, exec, kitty

# Close focused window
bind = $mainMod, Q, killactive
```

📝  Puedes agregar mas , haciendo referencia a  [Hyprland wiki](https://wiki.hyprland.org/Configuring/Keybinds/) para ejecutar mas acciones.

---

## Timeshift

  

Instala Timeshift para habilitar los snapshots del sistema

```
sudo dnf install timeshift
```

---

## Virtualization & Looking Glass 

  

Instalacion:

```
sudo dnf group install virtualization
sudo dnf install virt-manager virt-install libvirt-daemon-config-network qemu-kvm bridge-utils edk2-ovmf spice-server spice-gtk
sudo systemctl enable --now libvirtd
```

Habilita permisos de GUI:

```
sudo dnf install lxqt-policykit
```

Recarga Hyprland config con agente:

```
nano ~/.config/hypr/scripts/loadconfig.sh
```

```
#!/bin/bash
hyprctl reload
/usr/libexec/lxqt-policykit-agent &
```

y en  ~/.config/hypr/hyprland.conf:

```
exec-once = ~/.config/hypr/scripts/loadconfig.sh
```

---

## Máquina Virtual Windows (XML QEMU)
Para crear tu VM con passthrough de GPU, usa el siguiente XML como plantilla. Guarda el XML como WindowsX.xml y luego impórtalo:
```bash
virsh define guindousdiez.xml
virsh start GuindousDiez
```

Incluye:

* Hugepages activados

* Memoria bloqueada y no compartida

* CPU topology detallada

* Q35 machine type con UEFI

* Looking Glass con IVSHMEM


---
## **🔍 Enlaces utiles**

- [Hyprland Dotfiles + Install](https://github.com/mylinuxforwork/dotfiles/wiki/Installation)
    
- [Looking Glass Tutorial (YouTube)](https://www.youtube.com/watch?v=dxiX3E5B8bU)
    
- [KVM Gaming Optimization](https://blandmanstudios.medium.com/tutorial-the-ultimate-linux-laptop-for-pc-gamers-feat-kvm-and-vfio-dee521850385)
    

---



— Franco






