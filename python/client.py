import pynexus

client = pynexus.Client("tcp://root:root@localhost:1717")

try:
    print(client.taskPush("demo.hello", None))
finally:
    client.close()
