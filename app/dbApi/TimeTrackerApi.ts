import { db } from 'config/firebase';
import Table from 'models/table';

export const doCreateTime = (id: string, date: string, time: number) => {
  db.ref(`/TimeTracker/${id}`).push({ date: date, time: time });
};

export const getTimeDate = (id: string): Table.Time[] => {
  let timeRef = db
    .ref(`/TimeTracker/${id}`)
    .orderByKey()
    .limitToLast(100);
  let tempStore: Table.Time[] = [];
  timeRef.on('child_added', snapshot => {
    tempStore.push({
      date: snapshot.val().date,
      time: snapshot.val().time,
      id: snapshot.key
    });
  });
  return tempStore;
};

export const updateTime = (userid: string, entityid: string, time: number) => {
  let newPostKey = db.ref(`/TimeTracker/${userid}/${entityid}`).update({ time: time });
};

export const onceGetTime = (id: string) => db.ref(`/TimeTracker/${id}`).once('value');
