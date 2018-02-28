<?php

class Cnb2lp {

	// armure par défaut
	private $currKey = 'mibM';

	// tableau de correspondance des notes
	private $notesConv;

	// Constructeur
	public function __construct() {

		$hauteur = $this->getConv("'",1,1,1,1,1,1,1,0,0);
		$bemol = array(
			'dobM' => $this->getConvBemol(1,1,1,1,1,1,1),
			'solbM' => $this->getConvBemol(1,1,1,1,1,1,0),
			'rebM' => $this->getConvBemol(1,1,1,1,1,0,0),
			'labM' => $this->getConvBemol(1,1,1,1,0,0,0),
			'mibM' => $this->getConvBemol(1,1,1,0,0,0,0),
			'sibM' => $this->getConvBemol(1,1,0,0,0,0,0),
			'faM' => $this->getConvBemol(1,0,0,0,0,0,0),
			'doM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'solM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'reM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'laM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'miM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'siM' => $this->getConvBemol(0,0,0,0,0,0,0),
			'fa#M' => $this->getConvBemol(0,0,0,0,0,0,0),
			'do#M' => $this->getConvBemol(0,0,0,0,0,0,0)
			);
		$diese = array(
			'dobM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'solbM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'rebM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'labM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'mibM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'sibM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'faM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'doM' => $this->getConvDiese(0,0,0,0,0,0,0),
			'solM' => $this->getConvDiese(1,0,0,0,0,0,0),
			'reM' => $this->getConvDiese(1,1,0,0,0,0,0),
			'laM' => $this->getConvDiese(1,1,1,0,0,0,0),
			'miM' => $this->getConvDiese(1,1,1,1,0,0,0),
			'siM' => $this->getConvDiese(1,1,1,1,1,0,0),
			'fa#M' => $this->getConvDiese(1,1,1,1,1,1,0),
			'do#M' => $this->getConvDiese(1,1,1,1,1,1,1)
			);

		$this->notesConv = array(
			'hauteur' => $hauteur,
			'bemol' => $bemol,
			'diese' => $diese
			);
	}

	private function getConvBemol ($si, $mi, $la, $re, $sol, $do, $fa) {
		return $this->getConv('b',$si, $la, $sol, $fa, $mi, $re, $do, $si, $la);
	}

	private function getConvDiese ($fa, $do, $sol, $re, $la, $mi, $si) {
		return $this->getConv('#',$si, $la, $sol, $fa, $mi, $re, $do, $si, $la);
	}

	private function getConv($symbol, $si, $la, $sol, $fa, $mi, $re, $do, $SI, $LA) {
		return array(
			'si' => $this->getSymbol($symbol,$si),
			'la' => $this->getSymbol($symbol,$la),
			'sol' => $this->getSymbol($symbol,$sol),
			'fa' => $this->getSymbol($symbol,$fa),
			'mi' => $this->getSymbol($symbol,$mi),
			're' => $this->getSymbol($symbol,$re),
			'do' => $this->getSymbol($symbol,$do),
			'SI' => $this->getSymbol($symbol,$SI),
			'LA' => $this->getSymbol($symbol,$LA),
		);
	}

	private function getSymbol($symbol, $flag){
		if ($flag) return $symbol;
		return '';
	}


	//--------------------------------
	// TRAITEMENT
	//--------------------------------

	// Lance la convertion
	public function convert($content) 
	{
	    try {
            $lpData = $this->convertData($content);
            $result = $this->getConvertResponse(true,'',$lpData,'Convertion terminée');
        } catch (Exception $ex) {
            $result = $this->getConvertResponse(false, 'Erreur lors de la convertion', null, $ex->getMessage());
        }
        return $result;
	}

    // Converti un texte cnb en lp
    public function convertData($content)
    {
        $tokens = $this->getTokens($content);
        $LPTokens = array();
        foreach ($tokens as $token) {
            $LPTokens[] = $this->convertToken($token);
        }
        $result = '\score{ { ' . implode(' ',$LPTokens) . '} \layout{} \midi{} }';
        return $result;
    }


    // Prepare la réponse du convert
    private function getConvertResponse($success, $message, $lpData = null, $logData = '') {

	    // retourne la réponse formatté
        return array(
            'status' => array(
                'code' => $success ? 'OK' : 'ERROR',
                'message' => $message
            ),
            'lpData' => $lpData,
            'logs' => array (
                'titre' => 'cnb2lp',
                'content' => $logData
            )
        );
    }

    // Récupération de la liste des tokens non convertis
	private function getTokens($content)
	{
		$content = str_replace(chr(10), ' $ ', $content);
		$content = str_replace(chr(13), '', $content);
		$content = str_replace(chr(9), ' & ', $content);
		$count = 1;
		while($count != 0) {
			$content = str_replace('  ', ' ', $content,$count);
		}

		return explode(' ', $content);
	}


	// Converti un token
	private function convertToken($token)
	{
		$first = substr($token,0,1);
		switch ($first) {
			case '[':
				return $this->convertVariable($token);
			case '@':
				return $this->convertAnacrouse($token);
			case 'R':
				return $this->convertRepeat($token);
			case 'A':
				return $this->convertAlternative($token);
			case 'N':
				return $this->convertNolet($token);
			case '"':
				return $this->convertText($token);
			case '{':
				return '{';
			case '}':
				return '}';
			case '|':
				return '\break';
			case '$';
				return chr(10);
			case '&':
				return chr(9);
			case '-':
				return '~';
			case '=':
				return $this->convertSilence($token); 
			case '(':
				return $this->convertGrace($token);
			default:
				return $this->convertNote($token);
		}
		
	}

	private function convertVariable($token) 
	{
		if ($this->isTokenVariable($token)) {
			$token = str_replace('[', '', $token);
			$token = str_replace(']', '', $token);
			list($key,$value) = explode('=',$token);
			switch ($key) {
				case 'tempo':
					return '\\tempo 4 = ' . $value;
				case 'clef':
				case 'language':
					return '\\' . $key . ' "' . $value . '"';
				case 'tonalite':
					$this->currKey = $value;
					return '\\key ' . substr($value,0,strlen($originale)-1) . ' \major';
				default :
					return '\\' . $key . ' ' . $value;
			}
		} else if ($this->isTokenTime($token)) {
			$token = str_replace('[', '', $token);
			$token = str_replace(']', '', $token);
			return '\time ' . $token;
		} else {
			throw new Exception('Token incorrect : ' . $token);
		}
	}

	private function convertAnacrouse($token)
	{
		return '\partial ' . substr($token, 1);
	}

	private function convertRepeat($token)
	{
		return '\repeat volta ' . substr($token,1,strlen($token)-2) .  ' {';
	}

	private function convertAlternative($token)
	{
		return '\alternative {';
	}

	private function convertText($token)
	{
		return '\mark \markup { \normalsize \bold ' . str_replace('_', ' ', $token) . ' }';
		
	}

	private function convertSilence($token)
	{
		return 'r' . substr($token,1);
	}

	private function convertNolet($token)
	{
		$token = str_replace('N', '', $token);
		$token = str_replace('{', '', $token);
		return '\\tuplet ' . $token . ' {';
	}

	private function convertGrace($token)
	{
		$token = substr($token,1, strlen($token)-2);
		$notes = explode(',',$token);
		$result = '\grace{\stemDown \teeny ' . $this->getConvertedNote($notes[0]) . '32';
		if (count($notes)>1) {
			$result .= ' [';
			for ($i=1;$i<count($notes);$i++) {
				$result .= $this->getConvertedNote($notes[$i]) . '32 ';
			}
			$result .= ' ]';
		}
		$result .= '}';

		return $result;
	}

	private function convertNote($token)
	{
		// nb de car pour la note
		$nb = 2;
		if (strlen($token)>=3) {
			if (substr($token,0,3) == 'sol') $nb = 3;
		}

		// recup de la note
		$note = substr($token,0,$nb);

		// recup de la dree
		if (strlen($token) > $nb) {
			$duree = substr($token, $nb);
		} else {
			$duree = 4;
		}
		return '\stemUp \normalsize ' . $this->getConvertedNote($note).$duree;
	}


	private function getConvertedNote($note) {
		return  strtolower($note)  . 
				$this->notesConv['bemol'][$this->currKey][$note] .
				$this->notesConv['diese'][$this->currKey][$note] .
				$this->notesConv['hauteur'][$note];
	}

	private function isTokenVariable($token)
	{
		if (substr($token,0,1) != '[') return false;
		if (substr($token,strlen($token)-1,1) != ']') return false;
		if (substr_count($token,'=') != 1) return false;
		return true;
	}

	private function isTokenTime($token){
		if (substr($token,0,1) != '[') return false;
		if (substr($token,strlen($token)-1,1) != ']') return false;
		if (substr_count($token,'/') != 1) return false;
		return true;
	}
}

?>