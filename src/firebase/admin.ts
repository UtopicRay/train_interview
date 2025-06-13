import { getApps, initializeApp,cert } from "firebase-admin/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";
import {getStorage} from "firebase-admin/storage";
import {getMessaging} from "firebase-admin/messaging"

// const PROJECT_ID="traininterview"
// const PRIVATE_KEY_ID="f4dd89413b75e5c6e8881a6589c32d8513e0c4c3"
// const PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVoJZofW/151/t\nVA6rx7N4+yG3BeVTKgIS4N24xrgQqJZRmoYv6zgqmUYJYmOKKTsRJejQkFflRDw9\nqvJjR3rIPMGcccE4B9GEigtjMy6rQv4SHmVO93rp9VzCSvIdVG8GvDfYS1un52KE\ns2jFbEOhOQvkY3RvAegdenmSna9pBkQ1IFiyL6gUA/SV702VSe9Af9i1kBb8NF+l\nTSFmGLiJpb86T6vqm9EvTnGdMtirTbeZP/AuLXgw3xWP2g06WsaZScFMxZkIHXd4\nHkRTycG0V755r9F9QXNI5Y7dsStn1Rb4dv/fWd3ShOLW8lhOjhv5aAjBHM6OKsTK\nqex0E2KnAgMBAAECggEANrwmCVdJq6TWPJUxQLmu96S2cqNffoqxc4J62WsoTj+9\nrWBfkgvz4fFr42bwjswCZYV+oz0KSj4p400zmgm96p3/HWGnkv2ZMWjmPYWtnszE\n8I/Z84comYk+Q3zzELOgYdBchW0bvFIygeS3gPDX1JRvuz5+i1UhOhdhfbbdQgeP\nm918YJflOUREQ1R0G2vQqu3MDCNXtCvXDRU5TV9fdY0iSfOzAmx/JQ5U6zyF2D3l\nwDTKKQjvGyaSx5Wy7IolQ+3Smh5zLG+FDzoSDR3MeEb/5OJmRcL184oJm2JekpOv\nWrqY8/wZBDff8qs6tsbr7HBBuMlz6iLJ3Y6m1CsMcQKBgQDGUB2P5uuwOl1XKi42\nlEYsFur8ITd8QR3MAA0LU/C+KOubepMkkvxGSeKuquOERPw13uOOsfNcMm/N1TZW\n2MkqYjygDWhc9LwsN0LsQvGFkTGDTnEWEfaoSUYGF++Msl9In4DFRdoWqrXd8nG6\nLbyvHS/s8vqojquxQ32fi10ghQKBgQDBJvglcAGjDXeSV1nmwtNTLrkzLj9R7opx\notsAfpjcBTrK7+qw7AjbHah6bLA72lnQgskaSN/VhEH73oNlCCNI5xS/mzp+yKrv\nu5+CyZRpQ0D3tH/8MQo2zPc7qRMoz559qIlbZZzwsMIYv5CDdDKW9e4xMXidACwb\nO+hGpJCUOwKBgQCUuGgzDr4ZvutY/u0BSVkGn3lB87ckm8C4yCEAKccVFKL8SoQm\nnYRLQgWZb9aHzyRFUg3daV5T+g8WkZrarmDORDWq4eMuMusbTaYGgH2X6Tb0fdMY\n9gfAVJMK5tBi9zG1yMhNKQFQll0lQThAoyQpPv49+Eo6NiRUH4UKLP198QKBgGpe\nRot/ajdcBDxABI9TPUNy2KS51D8PiYhY8hgMn6uS6bS2eN1jruDULWL2FftwHMP6\nMjtaZIHWKuxEtsFdwOi18TQvjQAjDBenkIla73MkiVOgQFcmvoQ9Te26B4YTCCoV\nNUdy5wGZpdoxLKlnxTBjUQAgSVbUsHVzAVBd8gzfAoGAYHlFGCWAsJtIBE4nONdK\n0847VsKX09VdZzDO2QoK+ALU2CD+SYQvGZDZGv+9PViRFjUpdZhYuUeOnAMXdVqn\nxUC2Vo0yvDbNRKW8Ozn6Q6zCUhyY9n1pq0EhUpm1QoPCc9O6BlW5x4Cjbyd3gJCZ\ntrH8quDoUCI8gWNqi9YWxGo=\n-----END PRIVATE KEY-----\n"
// const CLIENT_EMAIL="firebase-adminsdk-fbsvc@traininterview.iam.gserviceaccount.com"

function InitFirebaseAdmin(){
    const apps=getApps

    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId: process.env.PROJECT_ID,
                clientEmail: process.env.CLIENT_EMAIL,
                privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n')
            })
        })
    }
    return {
        auth:getAuth(),
        db:getFirestore(),
        storage:getStorage(),
        messaging:getMessaging()
    }
}

export const {auth,db,storage,messaging}=InitFirebaseAdmin()