#!/usr/bin/env python3

import sys
import os
import subprocess

inputdir = "/home/kali/ezlog"
with open("outfile.txt","w") as outfile:
    for pcapFilename in os.listdir(inputdir):
         if not pcapFilename.endswith(".pcap"):
            continue
         subprocess.run(["tshark", "-r",
             os.path.join(inputdir, pcapFilename),
             "-q", "-z", "io,stat,1", "--export-objects", "http,destdir2"],
            stdout=outfile, check=True)   




