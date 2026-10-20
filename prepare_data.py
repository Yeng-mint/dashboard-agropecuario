import openpyxl, json, re
U='/mnt/user-data/uploads/'
def rows(f): return list(openpyxl.load_workbook(U+f,read_only=True,data_only=True).active.iter_rows(values_only=True))
def n(x):
    return float(x) if isinstance(x,(int,float)) else None
def r(x): return None if x is None else round(x,2)
def muni(f,cols):
    st=[];mu=[];nat=None;cur=None
    for t in rows(f):
        a=t[0]
        if not(isinstance(a,str) and re.match(r'^\d\d ',a)): continue
        v=[r(n(t[c])) for c in cols]
        if a.startswith('00'): nat=v
        elif t[1] is None: st.append([t[2]]+v); cur=a
        else: mu.append([a[:2],t[2]]+v)
    return nat,st,mu
def flat(f,cols,skip=('Estados Unidos Mexicanos',)):
    st=[];nat=None
    for t in rows(f):
        a=t[0]
        if not isinstance(a,str) or not isinstance(t[1],(int,float)): continue
        v=[r(n(t[c])) for c in cols]
        if a in skip: nat=v
        else: st.append([a]+v)
    return nat,st
D={}
D['sup']=muni('superficie_total_entidad_mpio.xlsx',[3,4,5,6,7,8])
D['mod']=muni('ProdAgricolaModalidadHidrica.xlsx',[3,4,5,6,7,8,9])
D['irr']=muni('ProdAgricolaIrrigación.xlsx',[3,4,5,7,11,12,17,18])
D['agua']=flat('RiegoTipo_de_agua.xlsx',[1,2,3,4,5,6,7,8,9])
D['fuente']=flat('Riego_fuente_de_agua.xlsx',[1,2,3,4,5,6,7,8,9,10,11,12])
D['fert']=flat('Volumen_fertilizante.xlsx',list(range(1,14)))
for k,v in D.items(): print(k,len(v[1]),v[0], v[1][0], v[2][0] if len(v)>2 else '', len(v[2]) if len(v)>2 else '')
# codes for municipal -> state index
json.dump({k:{'nat':v[0],'st':v[1],'mu':v[2] if len(v)>2 else []} for k,v in D.items()},open('data.json','w'),ensure_ascii=False,separators=(',',':'))
