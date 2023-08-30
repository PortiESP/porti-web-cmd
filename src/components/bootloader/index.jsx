import { useCallback, useEffect, useRef, useState } from "react"
import scss from "./bootloader.module.scss"

const DELAY = 20
const LAST_WAIT_DELAY = 1500

export default function Bootloader({ setScene, isLoaded }) {
  const [renderedData, setRenderedData] = useState([])
  const [ready, setReady] = useState(false)
  const $focus = useRef(null)

  // Animate logs
  useEffect(() => {
    // Write line by line
    const timers = messages.map((m, i) =>
      setTimeout(() => {
        setRenderedData((old) => [...old, m])
        $focus.current.scrollIntoView()
      }, DELAY * i)
    )

    // Wait a few seconds after the animation
    setTimeout(() => {
      setReady(true)
    }, timers.length * DELAY + LAST_WAIT_DELAY)

    // Clean-up timers
    return () => timers.map((id) => clearInterval(id))
  }, [])

  // Ensure that all the data is retrieved before changing the scene
  useEffect(() => {
    if (ready && isLoaded) {
      localStorage.setItem("last_seen", Date.now())
      setScene(2)
    }
  }, [ready, isLoaded])

  return (
    // prettier-ignore
    <div className={scss.wrap}>
      {renderedData.map((msg,i) => <span key={i}>{msg}</span>)}
      <span ref={$focus}/>
    </div>
  )
}

const messages = [
  <pre>[BOOTLOADER] Loading, please wait...</pre>,
  <pre>Boot 0xPorti x86 version 17.5.2</pre>,
  <pre>[DEVICES] Initializing device files</pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] /dev/sda1 *BOOT
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] /dev/sda2
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] /dev/sda3
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] /dev/sda4
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] /dev/sda4
  </pre>,
  <pre>[NETWORK] Initializing network interfaces</pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Raising interfaces
    [##################################################] 100%
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Connecting to DHCP
    [##################################################] 100%
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Connecting to DNS
    [##################################################] 100%
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Raising wlan0 interface
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Raising eth0 interface
  </pre>,
  <pre>[Services] Staring system services</pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> D-BUS.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "red" }}>Failed</span> bluetooth.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> httpd.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> proxy.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> firewalld.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> mysqld.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> cron.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> apt-get.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> alsa-restore.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> alsa-status.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> alsa-utils.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> apache2.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> apparmor.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> apport.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> acpid.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    sys-kernel-config.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    sys-kernel-debug.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    sys-kernel-tracing.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> boot-efi.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> journal.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    systemd-user-sessions.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    systemd-user-udev.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    systemd-user-udevd.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    systemd-user-logind.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> sshd.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "red" }}>Failed</span> rpc-server.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    network-manager.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> tor.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> proxy-chains.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span>{" "}
    user-runtime-dir.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "red" }}>Failed</span> gdb.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "red" }}>Failed</span> redis.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> postgresql.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> kmod.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> kdump.service
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] <span style={{ color: "green" }}>Starting</span> dbus.service
  </pre>,
  <pre>[Services] Staring system services</pre>,
  <pre>fbcon: svgadrmfb (fb0) is primary device</pre>,
  <pre>[ 4.288893] Console: switching to colour frame buffer device 100x37</pre>,
  <pre>[ 4.290123] [drm] Initialized viregfx 2.15.0 20180704 for 0000:00:02.0 on minor 0</pre>,
  <pre>[ 4.433478] snd_intel8x0 0000:00:05.0: white list rate for 1028:0177 is 48000</pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Reached target Sound Card.
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started Set console font and keymap.
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started live-config contains the com.ring the boot process (late
    userspace)..{" "}
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started live-config contains the com.ring the boot process (late
    userspace)..{" "}
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Reached target Basic System.{" "}
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started Self Monitoring and Reporting Technology (SMART) Daemon.{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> Login Service...{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> Restore /etc/resolv.conf if..hed before the ppp link was shut
    down...{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> Modem Manager... <span style={{ color: "green" }}>Starting</span>{" "}
    System Logging Service...{" "}
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started irqbalance daemon. {"\n"}
    <span style={{ color: "green" }}>Starting</span> Accounts Service...{" "}
  </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Reached target Login Prompts.{" "}
  </pre>,
  <pre>Started D-Bus System Message Bus. </pre>,
  <pre>
    [ <span style={{ color: "green" }}>OK</span> ] Started Regular background program processing daemon.{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> LSB: Start or stop stunnel 4.x (TLS tunnel for network daemons)...{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> LSB: thin initscript...{" "}
  </pre>,
  <pre>Mounting mist binary format filesysten </pre>,
  <pre>Haunting semi:rib Tile:me:ten ... K Activating (possible) soap ... </pre>,
  <pre>Setting up dm-crypt nappings {"\n"}K Setting system clock using the hardware clock WW1 ... </pre>,
  <pre>Configuring kernel parameters </pre>,
  <pre>Updating enuirunment K Cleaning luar/lock, /uar/run </pre>,
  <pre>Cleaning 'top directory ... K Setting hostnane to gentoo ... </pre>,
  <pre>Running hdparn on /demehda a Sunning hdparn on ,deu/hdc ... </pre>,
  <pre>Loading ALSA nodules ... </pre>,
  <pre>Loading: sod-card ... {"\n"}K Restoring Mixer Levels ... </pre>,
  <pre>
    Loading key mappings ... {"\n"}K Setting terninal encoding to wit -8 ... {"\n"}K Setting user font ...{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> In K Bringing up lo{" "}
  </pre>,
  <pre>127.0.0.1/0 Adding routes </pre>,
  <pre>122.0.0.0/0 </pre>,
  <pre>
    Setting franehisffer 1:01Valit Hedges ... {"\n"}K Initializing random number generator ... {"\n"}IMIT: Entering
    runleuel: {"\n"}K <span style={{ color: "green" }}>Starting</span> syslog-ng g{" "}
    <span style={{ color: "green" }}>Starting</span> eth8{" "}
  </pre>,
  <pre>Bringing lap ethil K 192.168.2.11 </pre>,
  <pre>Adding routes K default go 192.168.2.1 ... </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> cupsd{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> D-111DI system messagehos K{" "}
    <span style={{ color: "green" }}>Starting</span> dcron{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> Hardware Abstraction Layer daemon ... K Mounting network
    filesystens{" "}
  </pre>,
  <pre>samba {"-> start: snbd K samba ->"} start: imhd </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> sshd{" "}
  </pre>,
  <pre>
    <span style={{ color: "green" }}>Starting</span> local ...{" "}
  </pre>,
]
