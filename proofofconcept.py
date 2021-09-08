#!/usr/bin/env python3

import sys
import os
import subprocess as s
import shutil 

inputdir = sys.argv[1]
outputdir = f"{inputdir}_exported_objects"



def ezlog(inputdir):
    with open("outfile.txt","w") as outfile:
        for pcapFilename in os.listdir(inputdir):
             if not pcapFilename.endswith(".pcap"):
                continue
             s.run(["tshark", "-r",
                os.path.join(inputdir, pcapFilename),
                "-q", "-z", "io,stat,1", "-z", "credentials", "--export-objects", "http,/home/kali/ezlog/destdir2"],
                stdout=outfile, check=True)
            
    os.rename("/home/kali/ezlog/destdir2", outputdir)
    for filename in os.listdir(outputdir):
        process_list = ['jpg', 'png', 'gif', 'exe']
        for item in process_list:
            if filename.endswith(item):
                if not os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"):
                    os.makedirs(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}")
                if os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"):
               # else:
                    shutil.move(f"/home/kali/ezlog/{outputdir}/{filename}", f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}")



               # variable_1 = f"{filename}"
               # s.run(["mkdir", f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"])
               # s.run(["mv", f"{variable_1}", f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"])
            
            


def main():
    ezlog(inputdir)

main()


#hello

