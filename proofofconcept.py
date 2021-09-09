#!/usr/bin/env python3

import sys
import os
import subprocess as s
import shutil 




def ezlog(inputdir):
    outputdir = f"{inputdir}_exported_objects"
    with open("outfile.txt","w") as outfile:
       # for pcapFilename in os.listdir(inputdir):
           # if not pcapFilename.endswith(".pcap"):

        s.run(["tshark", "-r", inputdir,
             "-q", "-z", "io,stat,1", "-z", "credentials", "--export-objects", "http,/home/kali/ezlog/destdir2"],
                stdout=outfile, check=True)
            
    os.rename("/home/kali/ezlog/destdir2", outputdir)
    
    for filename in os.listdir(outputdir):
        process_list = ['jpg', 'png', 'gif', 'exe', 'js', 'swf', 'css', 'xml', 'htm', 'html', 'php', 'txt', 'com', 'jsp', 'jpeg']
        for item in process_list:
            #filename = filename.lower()
            if filename.endswith(item) or filename.endswith(item.upper()):
                if not os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"):
                    os.makedirs(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}")
                if os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}"):
                    shutil.move(f"/home/kali/ezlog/{outputdir}/{filename}", f"/home/kali/ezlog/{outputdir}/{inputdir}_{item}")
                else:
                    if not os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_other"):
                        os.makedirs(f"/home/kali/ezlog/{outputdir}/{inputdir}_other")
                    if os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_other"):
                        shutil.move(f"/home/kali/ezlog/{outputdir}/{filename}", f"/home/kali/ezlog/{outputdir}/{inputdir}_other")




               # variable_1 = f"{filename}"
               # s.run(["mkdir", f"/home/kali/EzLog/{outputdir}/{inputdir}_{item}"])
               # s.run(["mv", f"{variable_1}", f"/home/kali/EzLog/{outputdir}/{inputdir}_{item}"])
            
            


def main():
    inputdir = sys.argv[1]
    ezlog(inputdir)

main()


#hello

