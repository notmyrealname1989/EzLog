#!/usr/bin/env python3

import sys
import os
import subprocess as s
import shutil 




def ezlog(inputdir):
    other_path = f"/{inputdir}_exported_objects" +  f"/{inputdir}" + "_other"
    outputdir = f"{inputdir}_ez"
    http_output = "http," + outputdir + other_path
    final_path = outputdir + other_path
    pcap_credentials = f"{inputdir}_credentials.txt"
    pcap_smtp = f"{inputdir}_smtp.txt"
   # print(http_output)
   # if not os.path.exists("/home/kali/ezlog"):
       # os.makedirs("/home/kali/ezlog")
    with open(pcap_credentials,"w") as outfile:
      
       # for pcapFilename in os.listdir(inputdir):
           # if not pcapFilename.endswith(".pcap"):

        s.run(["tshark", "-r", inputdir,
             "-q", "-T", "fields", "-e", "http.authbasic", "--export-objects", http_output],
                stdout=outfile, check=True)
       

    stuff = []
    with open(pcap_credentials, 'r') as open_file:
        for line in open_file:
            stuff.append(line)
    
    newstuff = [item for item in stuff if item != '\n']

    with open(pcap_credentials, 'w') as open_file:
        for item in newstuff:
               open_file.write(item)
        shutil.move(pcap_credentials, outputdir)
        
    with open(f"/home/kali/ezlog/{outputdir}/{pcap_credentials}", 'r') as open_file:
        if os.stat(f"/home/kali/ezlog/{outputdir}/{pcap_credentials}").st_size == 0:
            os.remove(f"/home/kali/ezlog/{outputdir}/{pcap_credentials}")
           
        
    with open(pcap_smtp,"w") as outfile:
        s.run(["tshark", "-Y", "smtp", "-r", inputdir], stdout=outfile, check=True)
        shutil.move(pcap_smtp, outputdir)

    with open(f"/home/kali/ezlog/{outputdir}/{pcap_smtp}", 'r') as open_file:
        if os.stat(f"/home/kali/ezlog/{outputdir}/{pcap_smtp}").st_size == 0:
            os.remove(f"/home/kali/ezlog/{outputdir}/{pcap_smtp}")

   # os.rename("/home/kali/ezlog/destdir2", outputdir)
    
    for filename in os.listdir(final_path):
        process_list = ['jpg', 'png', 'gif', 'exe', 'js', 'swf', 'css', 'xml', 'htm', 'html', 'php', 'txt', 'com', 'jsp', 'jpeg', 'mp3']
       # other_files = f"/home/kali/ezlog/{outputdir}/{filename}"
       # other_path = f"/home/kali/ezlong/{outputdir}/{inputdir}_other"
        for item in process_list:
            #filename = filename.lower()
            if filename.endswith(item) or filename.endswith(item.upper()):
                if not os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_exported_objects/{inputdir}_{item}"):
                    os.makedirs(f"/home/kali/ezlog/{outputdir}/{inputdir}_exported_objects/{inputdir}_{item}")
                if os.path.exists(f"/home/kali/ezlog/{outputdir}/{inputdir}_exported_objects/{inputdir}_{item}"):
                    shutil.move(f"/home/kali/ezlog/{outputdir}/{other_path}/{filename}", f"/home/kali/ezlog/{outputdir}/{inputdir}_exported_objects/{inputdir}_{item}")
        
        # else:
               # if not os.path.exists(other_path):
                #    os.makedirs(other_path)
                #if os.path.exists(other_path):
                    #shutil.move(other_files, other_path)
                #    s.run(["mkdir", other_path])
                 #   s.run(["mv", other_files, other_path])




               # variable_1 = f"{filename}"
               # s.run(["mkdir", f"/home/kali/EzLog/{outputdir}/{inputdir}_{item}"])
               # s.run(["mv", f"{variable_1}", f"/home/kali/EzLog/{outputdir}/{inputdir}_{item}"])
            
            


def main():
    inputdir = sys.argv[1]
    ezlog(inputdir)

main()


#hello

