import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG,
                    format='[%(levelname)s] (%(threadName)-10s) %(message)s',
                    )


def worker():
    logging.debug('Starting')
    time.sleep(1)
    logging.debug('Exiting')
    #print (threading.currentThread().getName(),  'Exiting')


def my_service():
    logging.debug('Starting')
    logging.debug('Exiting')

t = threading.Thread(name='worker', target=worker)
w = threading.Thread(name='daemon', target=my_service)
t.setDaemon(True)
w2 = threading.Thread(target=worker)

w.start()
#w2.start()
t.start()

#w.join()
#t.join()
