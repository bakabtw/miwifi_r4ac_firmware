# Stock firmware v2.18.58 for Xiaomi Mi4A router
The file were extracted from `miwifi_r4ac_firmware_e9eec_2.18.58.binn`

## Firmware content
```bash
$ binwalk miwifi_r4ac_firmware_e9eec_2.18.58.bin                                        ✔ 

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
676           0x2A4           uImage header, header size: 64 bytes, header CRC: 0xCE07E6B, created: 2019-07-30 10:05:45, image size: 1425176 bytes, Data Address: 0x80000000, Entry Point: 0x80000000, data CRC: 0x2EE7892A, OS: Linux, CPU: MIPS, image type: OS Kernel Image, compression type: lzma, image name: "MIPS OpenWrt Linux-3.10.14"
740           0x2E4           LZMA compressed data, properties: 0x6D, dictionary size: 8388608 bytes, uncompressed size: 4220416 bytes
1442468       0x1602A4        Squashfs filesystem, little endian, version 4.0, compression:xz, size: 8814588 bytes, 2039 inodes, blocksize: 262144 bytes, created: 2019-07-30 10:05:41
```

## Getting rootfs
```bash
dd if=miwifi_r4ac_firmware_e9eec_2.18.58.bin of=rootfs.sqfs bs=1 skip=1442468
```

## Extracting rootfs
```bash
unsquashfs rootfs.sqfs
```
