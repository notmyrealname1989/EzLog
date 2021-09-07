#!/usr/bin/env python3

import sys
import os
import subprocess

inputdir = sys.argv[1]
outputdir = f"{inputdir}_exported_objects"



def ezlog(inputdir):
    with open("outfile.txt","w") as outfile:
        for pcapFilename in os.listdir(inputdir):
             if not pcapFilename.endswith(".pcap"):
                continue
             subprocess.run(["tshark", "-r",
                os.path.join(inputdir, pcapFilename),
                "-q", "-z", "io,stat,1", "-z", "credentials", "--export-objects", "http,/home/kali/ezlog/destdir2"],
                stdout=outfile, check=True)
            
    os.rename("/home/kali/ezlog/destdir2", outputdir)
    for filename in os.listdir(outputdir):
        picture = filename.endswith(".jpg")
        if filename is picture:
            os.mkdir(f"/home/kali/ezlog/{outputdir}/jpg_files", 0o666)
            move(filename, f"/home/kali/ezlong/{outputdir}/{jpg_files}")


def main():
    ezlog(inputdir)

main()


#hello
