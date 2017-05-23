#def funkcia(func):
    #def wrapper(*args, **kwargs):
        #print("before")
        #result = func(*args, **kwargs)
        #print("after")
        #return result
    #return wrapper

#@funkcia
#def add(a,b):
    #print (a + b)

#add(1, 3)


#def dekorator(stara_funkcia):
    #def nova_funkcia():
        #stara_funkcia()
        #print("obohatenie starej fcie o dekorator")
    #return  nova_funkcia()

#@dekorator
#def fcia():
    #print ("funckia fcia")
    

#fcia()

def osetrenie_chyby(stara_funkcia):
    def nova(*args,**kwargs):
        try:
            return stara_funkcia(*args,**kwargs)
        except:
            print("chyba")
    return nova


@osetrenie_chyby
def ff(text):
    print text
    print 1/0
    
ff('python podporuje dekoratory')
