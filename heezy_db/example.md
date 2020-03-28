This is an example "Note".

Notes can contain references to other NoteWrappers.  Many references.

NoteWrappers contain mainy notes.  NoteWrappers have a human readable name.  For example, a NoteWrapper could be called "BucketList 2020". 


"BucketList 2020" could contain a note that points to both A and B.
Another note might point to A and C.
Yet another might reference B.
Another yet might have no pointers.

Thus you have a graph:



makeReferences(NoteWrapper) -> ReferenceCollection<NoteWrapper>
{
  name: "BucketList 2020"
  references: {
    [[A,B], [A,C], [B], []]
  }
}


findReferences(NoteName: string, NoteWrapper[] wrappers) ->
{
  name: <notename>,
  references: {
  }
}

This NoteWrapper currentWrapper is referenced by NoteWrappers foo and bar.
In foo contains the specific Note that references currentWrapper.

A markdown file with front matter can entirely contain a NoteWrapper.
In fact, you could use the file name itself as the name of the NoteWrapper.


// notes can contain notes in nested array on array [][][][].  This is kind of like a tree.
function expandNotes(Note note){
  return flattenContents(note)
}

This could be translated into the reference list.


Preprocessing the collection of all NoteWrappers is going to be the key to efficiency.

Precomputing simple to read reference graphs would be great.

function getAllUniqueReferences(NoteWrapper) ->
[ 
  {
    "Note 1"
    references: {
      {
        key:notewrapper,
        value: Note[]
      }
    }
  },
] {
  
}

how to handle when a nested node references something that a parent node references.  For example:

NoteWrapper::
World Tree:
* I'm the root, so I'll reference [[tree]]
** I'm a branch of the root, but I also reference [[tree]]

in this situation, getAllUniqueReferences would only have one value for a match on "tree".




```
BucketList 2020

Note:
[[]]

Note:
[[]]

```