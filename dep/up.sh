


path="/root/daxiaocloud/web/daxiao_home"

ips=("47.102.86.37")

for ip in ${ips[*]}
do


ssh -i /d/work/daxiaocloud/doc/ssh/daxiao.pem root@${ip}  << deploy

cd ${path}
git pull
npm i
bash dep/build.sh
bash dep/restart.sh

exit
deploy

done


# dep/flush.sh