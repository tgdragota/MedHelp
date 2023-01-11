import React, {useEffect, useState} from 'react'
import {Table} from "react-bootstrap";
import {auth, db} from "../firebase";
import {collection, getDocs, query, where} from "firebase/firestore";


export function Tabel() {
    const [programari, setProgramari] = useState([]);

    const fetch=async()=>{

        const q1 = query(
            collection(db, "programari_consultatie"),
            where("uid", "==", auth.currentUser.uid)
        );
        const q2 = query(
            collection(db, "programari_vaccin"),
            where("uid", "==", auth.currentUser.uid)
        );
        const querySnap1 = await getDocs(q1);
        const querySnap2 = await getDocs(q2);

        querySnap1.docs.forEach(item=>{
            setProgramari([...programari,item.data()])
            })

        querySnap2.docs.forEach(item=>{
            setProgramari([...programari,item.data()])
        })
    }

    useEffect(() => {
        fetch();

    }, []);

    return (
        <Table>
            <thead>
            <th>Data</th>
            <th>Ora</th>
            <th>Motiv</th>
            </thead>
            <tbody>
            {
                programari && programari.map((programare)=>{
                    return(
                        <tr key={programare.key}>
                            <td>{programare.data}</td>
                            <td>{programare.ora}</td>
                            <td>{programare.motiv}</td>
                        </tr>
                    )
                    })
            }
            </tbody>
        </Table>
    );
}

/*
export class Tabel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {programari : []}
    }

    componentDidMount() {

        const dbRef = ref(db, 'programari_consultatie');

        onValue(dbRef, (snapshot) => {
            let programare = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                programare.push({"key":keyName, "data":data});
            });
            this.setState({programari: programare});
        });

        db.collection("programari_consultatie").onSnapshot(snapshot => {

            })
        on("value", snapshot => {
            let programare = [];
            snapshot.forEach(snap => {
                programare.push(snap.val());
            });
            this.setState({programari: programare})
        });
    }

    render() {
        return(
            <Table>
                <thead>
                <th>Data</th>
                <th>Ora</th>
                <th>Tip</th>
                </thead>
                <tbody>
                {
                    this.state.programari.map((data) => {
                        return (
                            <tr>
                                <td>{data.data}</td>
                                <td>{data.ora}</td>
                                <td>{data.motiv}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        )
    }
}*/